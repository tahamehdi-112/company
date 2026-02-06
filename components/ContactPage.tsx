
import React, { useState, useEffect, useRef } from 'react';
import { PageType } from '../App';

const testimonials = [
  {
    text: "SunnieLabs Technologies consistently delivers results of the highest quality. We first got to know CEO Ali Haider as an excellent employee, and this has led to a long-standing, reliable trust relationship. Their expertise in open source IAM is unmatched.",
    author: "Peter Gietz",
    role: "Founder and CEO, DAASI International",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "We needed to reinforce our Engineering team for a mission-critical Fintech project. SunnieLabs provided senior-level engineers who adapted to our architecture instantly. A truly strategic partner for long-term growth.",
    author: "Arjen de Graaf",
    role: "VP Product, Valutico",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "Their cloud infrastructure expertise allowed us to migrate with zero downtime. The team at SunnieLabs is highly professional, responsive, and clearly experts in DevOps and MLOps workflows.",
    author: "Sarah Jenkins",
    role: "CTO, TechStream Global",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop"
  }
];

// Added onNavigate to props interface
interface ContactPageProps {
  targetSection?: string | null;
  onNavigate?: (page: PageType, section?: string) => void;
}

// Destructured onNavigate from props to satisfy App.tsx usage
const ContactPage: React.FC<ContactPageProps> = ({ targetSection, onNavigate }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const officesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (targetSection === 'our-offices' && officesRef.current) {
      officesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [targetSection]);

  const startSlider = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 4000);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    startSlider();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goToSlide = (idx: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial(idx);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen">
      {/* Contact Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-blue-600">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" 
            alt="Professional background" 
            className="w-full h-full object-cover"
           />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row-reverse min-h-[750px]">
            
            <div className="lg:w-[60%] p-10 lg:p-20">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-16">Contact Us</h1>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full name *</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-blue-600 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email *</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-blue-600 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone number *</label>
                  <input type="tel" className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-blue-600 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Country *</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-blue-600 transition-colors" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Company *</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-blue-600 transition-colors" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Message *</label>
                  <textarea rows={1} className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-blue-600 transition-colors resize-none" />
                </div>
                
                <div className="md:col-span-2 mt-4">
                  <p className="text-[10px] text-gray-400 mb-10 leading-relaxed max-w-xl">
                    By submitting this form, you agree to our <a href="#" className="underline font-bold text-blue-600">privacy policy</a>. We'll only use your data to respond to your inquiry.
                  </p>
                  <button className="bg-gray-900 text-white px-12 py-4 rounded-full font-bold hover:bg-blue-600 transition-all transform hover:-translate-y-1 shadow-xl">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:w-[40%] bg-gray-50/80 p-10 lg:p-16 flex flex-col justify-center border-r border-gray-100">
               <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  <div className="text-6xl text-blue-600/20 font-serif mb-8 select-none">“</div>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed relative z-10 mb-12 font-medium italic">
                    {testimonials[activeTestimonial].text}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].author} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-600 p-0.5"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonials[activeTestimonial].author}</h4>
                      <p className="text-[10px] font-bold text-blue-600 tracking-wider uppercase">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-12">
                    {testimonials.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`transition-all duration-300 ${
                          i === activeTestimonial ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300 hover:bg-gray-400'
                        } h-2 rounded-full`}
                      />
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-offices" ref={officesRef} className="bg-[#0a1128] text-white overflow-hidden scroll-mt-24">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 min-h-[400px] lg:min-h-[800px] relative">
             <img 
               src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.2]"
               alt="World Map"
             />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-full">
                   <div className="absolute top-[35%] left-[45%] pointer-events-auto">
                      <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                      <div className="absolute top-0 left-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                   </div>
                   <div className="absolute top-[38%] left-[48%] pointer-events-auto">
                      <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                      <div className="absolute top-0 left-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                   </div>
                   <div className="absolute top-[48%] left-[65%] pointer-events-auto">
                      <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                      <div className="absolute top-0 left-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-7xl font-extrabold mb-20 tracking-tighter">Our offices</h2>
            <div className="space-y-16">
              <div>
                <h3 className="text-xl font-extrabold mb-8 tracking-widest uppercase opacity-60">EMEA</h3>
                <div className="space-y-10">
                   <div className="space-y-4">
                      <p className="text-lg font-bold">40-42 Brondesbury Park, London NW6 7DW, UK</p>
                      <p className="text-blue-500 font-medium">+44 7375 600038</p>
                   </div>
                   <div className="space-y-4 pt-4 border-t border-white/10">
                      <p className="text-lg font-bold">Goldäckerstr 66, 71144 Steinenbronn, Germany</p>
                      <p className="text-blue-500 font-medium">+49 176 37130790</p>
                   </div>
                </div>
              </div>
              <div className="pt-16 border-t border-white/10">
                <h3 className="text-xl font-extrabold mb-8 tracking-widest uppercase opacity-60">APAC</h3>
                <div className="space-y-4">
                  <p className="text-lg font-bold">21-22 J3, Johar Town, Lahore, Pakistan</p>
                  <p className="text-blue-500 font-medium">+92 321 4615804</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
