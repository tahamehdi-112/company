
import React, { useEffect, useRef } from 'react';
import { PageType } from '../App';
import tahaImage from './assests/sunny.jpeg';
import aleemImage from './assests/aleem.jpeg';
import wassemImage from './assests/waseem.jpeg';
import tanzeelImage from './assests/tanzeel.jpeg';

// Added onNavigate to props interface
interface AboutUsProps {
  targetSection?: string | null;
  onNavigate?: (page: PageType, section?: string) => void;
}

const leadership = [
  {
    name: "Taha Mehdi",
    role: "Founder & Senior web Engineer",
    location: "Gilgit, Pakistan",
    image: tahaImage,
    bio: "With 6 years of experience in React,Vue.js and node.js development, Taha Mehdi drives WebLance's frontend engineering, creating high-performance, scalable, and user-friendly web applications that delight clients and end-users alike."
  },
  {
    name: "Aleem Haider",
    role: "Senior Backend & WordPress Developer",
    location: "Gilgit, Pakistan",
    image: aleemImage,
    bio: "With 4 years of experience in WordPress and Node.js development, Aleem Haider specializes in building robust, scalable backend systems and custom WordPress solutions that empower businesses to achieve their digital goals efficiently."
  },
  {
    name: "Wassem Abbas",
    role: "Senior Full-Stack & WordPress Developer",
    location: "gilgit, pakistan",
    image: wassemImage,
    bio: "With 4 years of experience in WordPress, Wix, JavaScript, and React.js, Wassem Abbas builds versatile, high-performance web solutions, combining frontend and backend expertise to deliver seamless digital experiences for clients."
  },
  {
    name: "Tanzeel Hussain",
    role: "MERN Stack Developer",
    location: "Islamabad, Pakistan",
    image: tanzeelImage,
    bio: "Tanzeel is a MERN Stack Developer specializing in building high-performance, scalable web applications. With strong expertise in React and Node.js, he delivers clean, efficient, and production-ready solutions."
  }
];

// Destructured onNavigate from props to satisfy App.tsx usage
const AboutUs: React.FC<AboutUsProps> = ({ targetSection, onNavigate }) => {
  const visionRef = useRef<HTMLElement>(null);
  const leadershipRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (targetSection === 'our-vision' && visionRef.current) {
      visionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (targetSection === 'leadership-team' && leadershipRef.current) {
      leadershipRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (!targetSection) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [targetSection]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-black overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2070&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-50" 
          alt="Team collaboration" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
          <h1 className="text-sm md:text-5xl font-extrabold mb-12 reveal tracking-tight">About WebLance</h1>
          <p className="max-w-3xl text-lg md:text-2xl opacity-90 leading-relaxed reveal font-medium" style={{ transitionDelay: '0.2s' }}>
            At WebLance, we are a results-driven web development and digital solutions company committed to building modern, scalable, and high-performance applications. We help startups, businesses, and enterprises turn their ideas into powerful digital products through clean code, intuitive design, and smart technology.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="our-vision" ref={visionRef} className="py-24 lg:py-32 bg-white scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 reveal">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-12">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
             At WebLance, our vision is to create real, measurable value for our clients through technology that drives meaningful impact. We are committed to excellence, with a strong focus on quality, precision, and attention to detail in everything we build.

We go beyond traditional development services by acting as true strategic partners. We collaborate closely with our clients, sharing both the risks and rewards of innovation, so they can confidently adopt new technologies and pursue ambitious growth.
            </p>
          </div>
          <div className="lg:w-1/2 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Technology Vision" 
              />
            </div>
          </div>
        </div>
      </section>

      <section id="leadership-team" ref={leadershipRef} className="py-32 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-7xl font-extrabold text-gray-900 mb-24 text-center reveal">Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member, i) => (
              <div 
                key={i} 
                className="bg-white p-10 lg:p-12 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 reveal flex flex-col"
                style={{ transitionDelay: `${(i % 2) * 0.1}s` }}
              >
                <div className="flex items-center gap-8 mb-10">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-50 shadow-md"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-bold text-sm mb-2">{member.role}</p>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium uppercase tracking-widest">
                      <span className="text-lg">📍</span> {member.location}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
