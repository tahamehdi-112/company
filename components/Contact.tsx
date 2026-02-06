
import React, { useEffect, useRef, useState } from 'react';
import { PageType } from '../App';

const testimonials = [
  {
    quote: "Working with SunnieLabs has been a truly rewarding experience. We needed to reinforce our Engineering team, and SunnieLabs provided outstanding engineers who exceeded expectations. Skilled in multiple programming languages, they quickly adapted to our architecture and AI workflows, helping us build a strong, long-term partnership.",
    author: "Arjen de Graaf",
    role: "VP Product, Valutico",
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    quote: "SunnieLabs transformed our legacy infrastructure into a high-performance cloud ecosystem. Their DevOps expertise is world-class, and their commitment to security ensured our data remained protected throughout the migration. They are more than a vendor; they are a strategic partner.",
    author: "Sarah Jenkins",
    role: "CTO, TechStream",
    image: "https://picsum.photos/id/65/100/100"
  },
  {
    quote: "The rapid application delivery promised by SunnieLabs was exactly what we got. We launched our fintech platform two weeks ahead of schedule with zero critical bugs. Their '360-degree approach' really shows in the final product's polish and performance.",
    author: "David Chen",
    role: "Founder, Peak Mobile",
    image: "https://picsum.photos/id/66/100/100"
  }
];

interface ContactProps {
  onNavigate?: (page: PageType) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, []);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 400);
  };

  const goToSlide = (index: number) => {
    if (index === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[#0a1128] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2 reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Contact Us</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Full name *</label>
              <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white/20 py-3 focus:border-blue-500 outline-none transition-colors text-white placeholder-white/20" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email *</label>
              <input type="email" placeholder="example@mail.com" className="bg-transparent border-b border-white/20 py-3 focus:border-blue-500 outline-none transition-colors text-white placeholder-white/20" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Phone number *</label>
              <input type="tel" placeholder="+1 (234) 567 890" className="bg-transparent border-b border-white/20 py-3 focus:border-blue-500 outline-none transition-colors text-white placeholder-white/20" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Country *</label>
              <input type="text" placeholder="Your Country" className="bg-transparent border-b border-white/20 py-3 focus:border-blue-500 outline-none transition-colors text-white placeholder-white/20" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Company *</label>
              <input type="text" placeholder="Your Company" className="bg-transparent border-b border-white/20 py-3 focus:border-blue-500 outline-none transition-colors text-white placeholder-white/20" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Message *</label>
              <textarea rows={2} placeholder="Tell us about your project" className="bg-transparent border-b border-white/20 py-3 focus:border-blue-500 outline-none transition-colors resize-none text-white placeholder-white/20" />
            </div>
            <div className="md:col-span-2 mt-4">
              <p className="text-[10px] text-white/30 mb-8 leading-relaxed">
                We will add your info to our CRM for contacting you regarding your request. For more info please consult our <button onClick={() => onNavigate?.('contact')} className="underline hover:text-white transition-colors">privacy policy</button>
              </p>
              <button className="group flex items-center gap-3 bg-white text-gray-900 px-12 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl">
                Send Message
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </form>
        </div>

        <div className="lg:w-1/2 flex items-center reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-white/5 p-8 md:p-16 rounded-[2.5rem] relative border border-white/10 backdrop-blur-md min-h-[500px] flex flex-col justify-between">
            <div className="text-8xl absolute top-6 left-6 text-blue-500 opacity-20 font-serif pointer-events-none">“</div>
            <div className={`transition-all duration-500 relative z-10 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <p className="text-xl md:text-2xl italic leading-relaxed mb-10 text-white/90 font-light">
                {testimonials[activeIndex].quote}
              </p>
              <div className="flex items-center gap-5">
                <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].author} className="w-16 h-16 rounded-full border-2 border-blue-500 p-0.5 object-cover" />
                <div>
                  <div className="font-bold text-lg">{testimonials[activeIndex].author}</div>
                  <div className="text-sm text-blue-400 font-semibold tracking-wide uppercase">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-12 relative z-10">
               {testimonials.map((_, i) => (
                 <button key={i} onClick={() => goToSlide(i)} className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-12 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'w-4 bg-white/20 hover:bg-white/40'}`} aria-label={`Go to slide ${i + 1}`} />
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
