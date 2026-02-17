import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import OpenAI from "openai";
import botLogo from "./assests/logo.png";

interface Message {
  role: "user" | "bot";
  content: string;
}

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const CompanySupportBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hello 👋 Welcome to WebLance. How can I assist you regarding our services?",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const getGPTReply = async (userInput: string) => {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `
You are a professional support chatbot for WebLance, a modern web development company.

Rules:
- Only answer questions related to WebLance services, pricing, team, projects, or contact.
- If the question is unrelated, politely refuse.
- Keep answers short, professional, and helpful.
            `,
          },
          ...messages.map((msg) => ({
            role: msg.role === "bot" ? "assistant" : "user",
            content: msg.content,
          })),
          {
            role: "user",
            content: userInput,
          },
        ],
      });

      return (
        completion.choices[0].message.content ||
        "Sorry, I couldn't generate a response."
      );
    } catch (error) {
      console.error(error);
      return "Something went wrong. Please try again.";
    }
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const reply = await getGPTReply(input);

    const botMessage: Message = {
      role: "bot",
      content: reply,
    };

    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-xl transition-all duration-300"
        >
          {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col h-[420px]"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 font-semibold flex items-center">
              <img
                src={botLogo}
                alt="bot"
                className="w-6 h-6 inline-block mr-2"
              />
              WebLance Support
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-blue-100 ml-auto"
                      : "bg-white shadow"
                  }`}
                >
                  {msg.content}
                </div>
              ))}

              {loading && (
                <div className="bg-white shadow p-2 rounded-lg max-w-[80%]">
                  Typing...
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex border-t bg-white">
              <input
                className="flex-1 p-3 text-sm outline-none"
                placeholder="Ask about our services..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 transition disabled:opacity-50"
                disabled={loading}
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CompanySupportBot;
