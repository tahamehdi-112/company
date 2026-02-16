
import React, { useState } from 'react';
import { FaWordpressSimple } from "react-icons/fa6";
import { FaWix } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { LuFigma } from "react-icons/lu";
import { LuServerCog } from "react-icons/lu";
import { RiGovernmentLine } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa6";
import backImg from './assests/work.jpg';
import ecommerCe from './assests/ecommerce.jpg';
import construCtion from './assests/construction.jpg';
import netPakage from './assests/netpakage.jpg';
import {
  ChevronRight, Layout, Code, Zap, Server, Box, Layers, Database, Cpu,
  Landmark, Phone, PlayCircle, Heart, GraduationCap, Scale, Building2,
  Truck, ShoppingBag, FileCode, Wind, Code2, ShieldCheck, Activity, GitBranch, Palette
} from 'lucide-react';
import { PageType } from '../App';

interface WhatWeDoProps {
  onNavigate: (page: PageType) => void;
}

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    desc: "Build scalable, high-performance web applications with MERN stack (MongoDB, Express, React, Node.js)."
  },
  {
    num: "02",
    title: "CMS Websites",
    desc: "Professional, easy-to-manage websites on WordPress and Wix for businesses of all sizes."
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Create responsive, user-friendly interfaces and modern designs with Figma and interactive layouts."
  }
];

const technologies = [
  { name: "MERN Stack", desc: "Scalable, high-performance web applications with MongoDB, Express, React & Node.js", icon: <Box className="w-10 h-10 text-blue-500" /> },
  { name: "WordPress", desc: "Custom themes, plugins, and CMS solutions for dynamic websites", icon: <FaWordpressSimple className="w-10 h-10 text-purple-500" /> },
  { name: "Wix", desc: "Fast, easy-to-manage websites with professional designs", icon: <FaWix className="w-10 h-10 text-blue-400" /> },
  { name: "HTML5 & CSS3", desc: "Responsive and modern front-end development for all devices", icon: <Cpu className="w-10 h-10 text-orange-500" /> },
  { name: "Next.js", desc: "Server-side rendering and optimized React applications", icon: <RiNextjsLine className="w-10 h-10 text-red-500" /> },
  { name: "Figma", desc: "UI/UX design, wireframes, and prototypes for engaging user experiences", icon: <LuFigma className="w-10 h-10 text-yellow-500" /> },
  { name: "API Integration", desc: "Seamless third-party API integration for robust functionality", icon: <LuServerCog className="w-10 h-10 text-red-600" /> },
  { name: "React.js", desc: "Dynamic and interactive front-end applications with reusable components", icon: <Zap className="w-10 h-10 text-cyan-400" /> }
];

const webTechCloud = [
  { name: "HTML5", icon: <FileCode />, color: "text-orange-500", glow: "group-hover:shadow-orange-500/20" },
  { name: "CSS3", icon: <Palette />, color: "text-blue-500", glow: "group-hover:shadow-blue-500/20" },
  { name: "Tailwind", icon: <Wind />, color: "text-cyan-400", glow: "group-hover:shadow-cyan-400/20" },
  { name: "JavaScript", icon: <Code2 />, color: "text-yellow-400", glow: "group-hover:shadow-yellow-400/20" },
  { name: "TypeScript", icon: <ShieldCheck />, color: "text-blue-600", glow: "group-hover:shadow-blue-600/20" },
  { name: "React.js", icon: <Zap />, color: "text-cyan-300", glow: "group-hover:shadow-cyan-300/20" },
  { name: "Next.js", icon: <Activity />, color: "text-white", glow: "group-hover:shadow-white/20" },
  { name: "Vue.js", icon: <Layers />, color: "text-green-500", glow: "group-hover:shadow-green-500/20" },
  { name: "Node.js", icon: <Server />, color: "text-green-600", glow: "group-hover:shadow-green-600/20" },
  { name: "Git", icon: <GitBranch />, color: "text-orange-600", glow: "group-hover:shadow-orange-600/20" },
];

const industryData = [
  {
    name: "Finance",
    icon: <BsBank2 />,
    description: "We help financial institutions build secure, high-performance web and mobile applications, improving operational efficiency and delivering reliable digital services"
  },
  {
    name: "Healthcare",
    icon: <Heart />,
    description: "Secure and user-friendly web solutions that support digital healthcare services, patient management systems, and modern medical platforms."
  },
  {
    name: "Academics",
    icon: <GraduationCap />,
    description: "Scalable e-learning platforms, student portals, and modern educational systems built for seamless digital learning experiences"
  },
  {
    name: "Legal",
    icon: <Scale />,
    description: "Secure case management systems, document automation tools, and professional legal platforms designed for modern law firms and practitioners."
  },
  {
    name: "Real Estate",
    icon: <Building2 />,
    description: "Modern property listing platforms and management systems built for seamless buying, selling, and leasing experiences"
  },
  {
    name: "Logistics",
    icon: <Truck />,
    description: "Efficient tracking systems and custom web platforms to optimize operations and supply chain workflows"
  },
  {
    name: "Retail",
    icon: <ShoppingBag />,
    description: "Scalable e-commerce and inventory management solutions designed to enhance customer engagement and sales"
  },
  {
    name: "Hospitality",
    icon: <Building2 />,
    description: "Booking systems and digital platforms that improve guest experience and operational efficiency"
  },
  {
    name: "Government",
    icon: <RiGovernmentLine />,
    description: "Secure and scalable digital solutions that streamline public services and administrative processes"
  },
  {
    name: "Industry",
    icon: <FaIndustry />,
    description: "Custom digital platforms and workflow systems that improve production efficiency, monitoring, and operational performance"
  }
];

const WhatWeDo: React.FC<WhatWeDoProps> = ({ onNavigate }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleIndustry = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="">
      <section className="relative h-[70vh] min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
        <img
          src={backImg}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="Modern tech office collaboration"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-white pt-24 md:pt-32">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 reveal tracking-tight">WebLance Services</h1>
          <p className="max-w-3xl text-lg md:text-2xl opacity-90 leading-relaxed reveal font-light" style={{ transitionDelay: '0.2s' }}>
            At WebLance, we deliver end-to-end web development and design solutions for startups, SMEs, and enterprises. Our expertise includes full-stack MERN development, UI/UX design, and scalable software engineering, as well as CMS platforms like WordPress and Wix for easy content management and professional websites.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-20 reveal">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 group reveal border border-gray-100" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-blue-600 font-bold mb-8 text-sm tracking-widest">{s.num}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-blue-600 transition-colors leading-tight">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-10 text-lg">{s.desc}</p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all"
                >
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:hidden"></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0d1117] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-20 reveal">Technologies We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {technologies.map((t, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="mb-8">{t.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{t.name}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 reveal">
            {webTechCloud.map((tech, i) => (
              <div key={i} className={`group flex flex-col items-center justify-center gap-4 w-28 h-28 md:w-36 md:h-36 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 shadow-xl ${tech.glow}`}>
                <div className={`${tech.color} transition-transform duration-500 group-hover:scale-125`}>
                  {React.cloneElement(tech.icon as React.ReactElement<any>, { size: 40 })}
                </div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white py-16 border-y border-gray-100">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-2xl font-bold text-gray-900 border-l-8 border-blue-600 pl-8 leading-tight">Move your business forward with a trusted software partner.</p>
          <button onClick={() => onNavigate('contact')} className="flex items-center gap-4 font-bold group whitespace-nowrap">
            <span className="text-xl">Contact Us Today</span>
            <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-xl">
              <ChevronRight className="w-7 h-7" />
            </div>
          </button>
        </div>
      </div>

      <section className="bg-[#fff5f5] py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 reveal">
            <h3 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter">E-Commerce Platforms</h3>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">WooCommerce and custom e-commerce solutions for scalable online stores</p>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-red-50">
              <h4 className="font-bold text-red-500 uppercase tracking-[0.2em] text-xs mb-6">RESULTS</h4>
              <p className="text-2xl font-bold text-gray-900 leading-tight">
                
                Delivered multiple high-performance web and mobile applications used by clients across the globe, driving measurable business growth and success.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 reveal">
            <div className="relative group">
              <div className="absolute -inset-4 bg-red-100 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <img src={ecommerCe} className="relative rounded-[2.5rem] shadow-2xl z-10 w-full object-cover" alt="EBANX Case Study" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1f2e] py-32 text-white">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row-reverse items-center gap-20">
          <div className="lg:w-1/2 reveal">
            <h3 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter">NeoxRenoveta</h3>
            <p className="text-xl opacity-70 mb-10 leading-relaxed">Developed a fully responsive website for a Netherlands-based home renovation company, covering painting, bathroom refurbishments, and interior design services</p>
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-blue-400 uppercase tracking-[0.2em] text-xs mb-6">RESULTS</h4>
              <p className="text-2xl font-bold text-white leading-tight">
              Our solutions are trusted by <span className="text-blue-500 underline decoration-2 underline-offset-8">hundreds of thousands</span> of users across Europe, delivering reliable, high-performance digital experiences
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 reveal">
            <img src={construCtion} className="rounded-[2.5rem] shadow-2xl border border-white/10 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="didmos Authentication Platform" />
          </div>
        </div>
      </section>

      <section className="bg-[#ffc107] py-32">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 reveal">
            <h3 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter">NETPACKAGE</h3>
            <p className="text-xl text-gray-900 mb-10 font-medium leading-relaxed">Redesigned and developed a modern, scalable web solution for a logistics client, improving efficiency and user experience.</p>
            <div className="bg-white/40 p-10 rounded-3xl border border-white/50 backdrop-blur-md">
              <h4 className="font-bold text-gray-900 uppercase tracking-[0.2em] text-xs mb-6">RESULTS</h4>
              <p className="text-2xl font-bold text-gray-900 leading-tight">
                The NetPackage platform is now used by <span className="italic">major vendors in Canada,</span> streamlining shipments and improving operational efficiency
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 reveal">
            <img src={netPakage} className="rounded-[2.5rem] shadow-2xl w-full object-cover" alt="Logistics Software NETPACKAGE" />
          </div>
        </div>
      </section>

      <div className="bg-white py-16 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-2xl font-bold text-gray-900 border-l-8 border-blue-600 pl-8 leading-tight max-w-2xl">Put your software innovation project in the hands of experienced industry specialists.</p>
          <button onClick={() => onNavigate('contact')} className="flex items-center gap-4 font-bold group whitespace-nowrap">
            <span className="text-xl">Contact Us Today</span>
            <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-xl">
              <ChevronRight className="w-7 h-7" />
            </div>
          </button>
        </div>
      </div>

      <section className="py-32 bg-[#0d1117] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-24 reveal">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">Industries we work with</h2>
            <p className="max-w-4xl text-xl opacity-70 leading-relaxed font-light">
              From startups to enterprises, we help businesses across technology, e-commerce, finance, healthcare, and education transform operations and grow through innovative web and software solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-l border-white/10">
            {industryData.map((ind, i) => (
              <div key={i} className="group relative flex flex-col p-12 min-h-[480px] border-r border-b border-white/10 transition-all duration-500 hover:bg-white/5 reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="mb-16 transition-transform duration-500 group-hover:-translate-y-4">
                  {React.cloneElement(ind.icon as React.ReactElement<any>, { className: "w-16 h-16 text-white opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-500" })}
                </div>
                <h3 className="text-3xl font-bold mb-8 text-white group-hover:text-blue-400 transition-colors tracking-tight">{ind.name}</h3>
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${expandedIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-base leading-relaxed opacity-70 text-white pt-6 border-t border-white/10">{ind.description}</p>
                </div>
                <div className="mt-auto self-end">
                  <button onClick={() => toggleIndustry(i)} className={`w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 hover:scale-110 ${expandedIndex === i ? 'bg-blue-600 border-blue-500 shadow-2xl shadow-blue-500/50' : 'group-hover:border-blue-500 hover:bg-white/10'}`}>
                    <ChevronRight className={`w-7 h-7 text-white transition-transform duration-500 ${expandedIndex === i ? 'rotate-90' : 'rotate-0'}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
