import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import botLogo from './assests/logo.png';

interface Message {
  role: "user" | "bot";
  content: string;
}

const CompanySupportBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hello 👋 Welcome to the Weblance. How can I assist you regarding our services?",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateReply = (text: string) => {
    const msg = text.toLowerCase();

    if (msg.includes("service") || msg.includes("what do you do")) {
      return "We specialize in modern web development including React, TypeScript, and scalable frontend solutions.";
    }

    if (msg.includes("team") || msg.includes("developer")) {
      return "Our team consists of experienced frontend and full-stack developers focused on delivering high-quality digital solutions.";
    }

    if (msg.includes("contact") || msg.includes("email")) {
      return "You can contact us through the contact section on this website. We typically respond within 24 hours.";
    }

    if (msg.includes("price") || msg.includes("cost")) {
      return "Project pricing depends on requirements. Please share your project details via our contact form for a custom quote.";
    }

    if (msg.includes("project") || msg.includes("work")) {
      return "We have worked on multiple corporate and modern UI-based projects. You can explore our portfolio section for more details.";
    }

    return "Sorry, I can only assist with questions related to our company and services.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    const botReply: Message = {
      role: "bot",
      content: generateReply(input),
    };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-xl transition-all duration-300 "
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
            className="fixed bottom-20 right-6 w-80 bg-transparent rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col h-[400px] border-2 border-blue-500 p-0"

          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 font-semibold">
             <img src={botLogo} className="w-6 h-6 inline-block mr-2" />
                WebLance Support
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto  p-3 space-y-3 text-sm bg-blue-300/10 backdrop-blur-md ">
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
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex border-none bg-white p-0">
              <input
                className="flex-1 p-3 text-sm outline-none "
                placeholder="Ask about our services..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 transition"
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
