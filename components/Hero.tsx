
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageType } from '../App';
import "./hero.css";
import heroImg from './assests/bannerva.jpg';
const sliderContent = [
  {
    headline: "We are WebLance, an engineering-led software company focused on developing reliable, scalable applications powered by modern cloud and web technologies.",
    subtext: ""
  },
  {
    headline: "We help startups and growing businesses transform ideas into secure, scalable digital products through smart architecture and modern development practices",
    subtext: ""
  },
  {
    headline: "Our collaborations with businesses across multiple industries reflect the versatility and expertise of our engineering team, showcasing our ability to adapt, innovate, and deliver high-quality solutions for a wide range of clients and product needs.",
    subtext: ""
  },
  {
    headline: "Our team designs and engineers reliable software solutions that scale seamlessly, ensuring long-term performance, security, and business growth.",
    subtext: ""
  }
];

interface StatProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const AnimatedStat: React.FC<StatProps> = ({ label, value, prefix = "", suffix = "", duration = 1200 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={countRef} className="text-white group cursor-default">
      <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300 tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[11px] md:text-xs lg:text-sm font-semibold uppercase tracking-[0.15em] opacity-60 leading-relaxed max-w-[140px] md:max-w-[180px] break-words">
        {label}
      </div>
    </div>
  );
};

interface HeroProps {
  onNavigate: (page: PageType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 3000); 
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index]);

  const handleNext = () => {
    setDirection('next');
    setIndex((prev) => (prev + 1) % sliderContent.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setIndex((prev) => (prev - 1 + sliderContent.length) % sliderContent.length);
  };

  const statsData = [
    { label: 'Years of Experience', value: 7, prefix: '+', suffix: '' },
    { label: 'Projects Delivered', value: 10, prefix: '+', suffix: '' },
    { label: 'Development Hours', value: 20, prefix: '+', suffix: 'K' },
    { label: 'Raised by Clients', value: 10, prefix: '+$', suffix: 'k' },
  ];

  return (
    <section className="relative min-h-screen md:h-screen lg:min-h-[900px] w-full flex items-center overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Modern Architecture"
          className="w-full h-full object-cover brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-32 pb-16 md:pb-0">
        <div className="max-w-6xl relative">
          
          <div className="relative overflow-hidden min-h-[420px] md:min-h-[450px] flex items-center mb-8">
            {sliderContent.map((item, i) => {
              let offsetClass = 'translate-x-full opacity-0';
              if (i === index) offsetClass = 'translate-x-0 opacity-100';
              else if (i < index) offsetClass = '-translate-x-full opacity-0';
              
              if (direction === 'next' && i === (index - 1 + sliderContent.length) % sliderContent.length) {
                offsetClass = '-translate-x-full opacity-0';
              }
              if (direction === 'prev' && i === (index + 1) % sliderContent.length) {
                offsetClass = 'translate-x-full opacity-0';
              }

              return (
                <div
                  key={i}
                  className={`absolute w-full py-8 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${offsetClass}`}
                >
                  <h1 id="hero-headline" className="text-sm md:text-5xl lg:text-5xl font-bold w-[70%] text-white leading-10 tracking-tight pr-12 mb-6">
                    {item.headline}
                  </h1>
                  <p className="text-sm md:text-5xl text-white/70 max-w-2xl leading-relaxed">
                    {item.subtext}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-8 mt-4">
            <div className="flex items-center gap-6">
              <button 
                onClick={handlePrev}
                className="group w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleNext}
                className="group w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex gap-3 ml-4">
                {sliderContent.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > index ? 'next' : 'prev');
                      setIndex(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === index ? 'w-10 bg-blue-600' : 'w-4 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button 
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-2xl md:ml-auto"
            >
              Work With Us
            </button>
          </div>

          <div className="mt-20 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 border-t border-white/10 pt-12 md:pt-16 pb-8 md:pb-12">
            {statsData.map((stat, i) => (
              <AnimatedStat 
                key={i}
                label={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                duration={1000}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
