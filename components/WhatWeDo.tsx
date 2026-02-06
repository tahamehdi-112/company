
import React, { useState } from 'react';
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
    title: "Cloud Infrastructures & Migration",
    desc: "Optimise the cost, agility and scalability of your IT ecosystem with cloud integrations that make the most of your current infrastructure."
  },
  {
    num: "02",
    title: "DevOps and MLOps",
    desc: "Optimize your automate processes and tasks that are critical to the provision of high-quality customer service."
  },
  {
    num: "03",
    title: "Application Development",
    desc: "Deliver exceptional user experiences with custom app development that helps you bring your most complex software vision to life."
  },
  {
    num: "04",
    title: "Application Re-engineering",
    desc: "Optimise and future-proof the best of your existing software for enhanced performance, agility, scalability and UX."
  },
  {
    num: "05",
    title: "UX Consulting",
    desc: "Boost user satisfaction and business efficiency of your products by streamlining design tasks and operations."
  },
  {
    num: "06",
    title: "Quality Assurance",
    desc: "Deliver a robust, UX-optimised product to market, faster and cheaper with customised QA services tailored to your business needs."
  }
];

const technologies = [
  { name: "Kubernetes", desc: "Proficiency in Container Orchestration, Scaling, and Software Deployment.", icon: <Box className="w-10 h-10 text-blue-500" /> },
  { name: "Terraform", desc: "Proficiency in Defining and Managing Various Types of Infrastructure, Including On-Premises and Cloud Resources.", icon: <Layers className="w-10 h-10 text-purple-500" /> },
  { name: "Azure", desc: "Proficient in harnessing Azure's range of Cloud Computing Services for efficient deployment and orchestration.", icon: <Server className="w-10 h-10 text-blue-400" /> },
  { name: "AWS", desc: "Expertise in Utilizing On-Demand Cloud Computing Services with Various Pay-as-You-Go Models.", icon: <Cpu className="w-10 h-10 text-orange-500" /> },
  { name: "Java", desc: "Proficiency in developing Java applications leveraging core language features, different frameworks and microservices architecture.", icon: <Database className="w-10 h-10 text-red-500" /> },
  { name: "Python", desc: "Expertise in Utilizing the versatility of Python for web development and scripting, ensuring robust and scalable solutions across diverse domains.", icon: <Code className="w-10 h-10 text-yellow-500" /> },
  { name: "Angular", desc: "Proficiency in building dynamic and modular web applications using the Angular framework.", icon: <Layout className="w-10 h-10 text-red-600" /> },
  { name: "React", desc: "Expertise in developing interactive and responsive user interfaces through React, delivering efficient and modern web applications.", icon: <Zap className="w-10 h-10 text-cyan-400" /> }
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
    icon: <Landmark />, 
    description: "Financial institutions can deliver exceptional financial services, with improved operational efficiency, lower transaction fees and diverse, blockchain-enabled transformation with the help of our engineers." 
  },
  { 
    name: "Healthcare", 
    icon: <Heart />, 
    description: "Innovating patient care with custom health-tech solutions, integrated medical records, and telemedicine platforms that prioritize security and user experience." 
  },
  { 
    name: "Academics", 
    icon: <GraduationCap />, 
    description: "Empowering education through scalable e-learning portals, student management systems, and interactive research tools designed for the modern classroom." 
  },
  { 
    name: "Legal", 
    icon: <Scale />, 
    description: "Streamlining case management, document automation, and secure legal communications with cutting-edge software tailored for firms and independent practitioners." 
  },
  { 
    name: "Government", 
    icon: <Building2 />, 
    description: "Modernizing public services with secure data management, e-governance portals, and efficient civic engagement tools that drive transparency." 
  },
  { 
    name: "Logistics", 
    icon: <Truck />, 
    description: "Optimizing supply chain visibility, fleet management, and real-time tracking for global distribution networks using IoT and cloud technology." 
  },
  { 
    name: "Retail", 
    icon: <ShoppingBag />, 
    description: "Scaling e-commerce experiences with integrated payment gateways, inventory management, and personalized customer journeys that drive conversion." 
  },
  { 
    name: "Real Estate", 
    icon: <Building2 />, 
    description: "Revolutionizing property management, virtual tours, and automated booking systems for modern real estate markets and property owners." 
  },
  { 
    name: "Telecom", 
    icon: <Phone />, 
    description: "Enhancing connectivity with high-performance network management, billing systems, and customer self-service applications for large scale providers." 
  },
  { 
    name: "Entertainment", 
    icon: <PlayCircle />, 
    description: "Delivering immersive digital experiences through streaming platforms, content management, and interactive media apps for global audiences." 
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
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          alt="Modern tech office collaboration" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-white pt-24 md:pt-32">
          <h1 className="text-5xl md:text-8xl font-extrabold mb-8 reveal tracking-tight">SunnieLabs Services</h1>
          <p className="max-w-3xl text-lg md:text-2xl opacity-90 leading-relaxed reveal font-light" style={{ transitionDelay: '0.2s' }}>
            SunnieLabs provides smart software engineering and IT to global enterprises, SMEs and technology challengers. 
            We have been helping businesses in multiple industries design, develop and deliver products and services 
            faster and more cost-effectively.
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
            <h3 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter">EBANX</h3>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">API development for cross-border payments via crypto exchanges</p>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-red-50">
              <h4 className="font-bold text-red-500 uppercase tracking-[0.2em] text-xs mb-6">RESULTS</h4>
              <p className="text-2xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600 text-4xl block mb-2">$7 million</span> 
                raised by the company and the application is being used in many countries worldwide.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 reveal">
            <div className="relative group">
              <div className="absolute -inset-4 bg-red-100 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" className="relative rounded-[2.5rem] shadow-2xl z-10 w-full object-cover" alt="EBANX Case Study" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1f2e] py-32 text-white">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row-reverse items-center gap-20">
          <div className="lg:w-1/2 reveal">
            <h3 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter">didmos</h3>
            <p className="text-xl opacity-70 mb-10 leading-relaxed">Our engineering team is currently engaged in the implementation of the authentication and core module of the didmos product.</p>
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-blue-400 uppercase tracking-[0.2em] text-xs mb-6">RESULTS</h4>
              <p className="text-2xl font-bold text-white leading-tight">
                The system is currently being utilised by <span className="text-blue-500 underline decoration-2 underline-offset-8">hundreds of thousands</span> of users across Europe.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 reveal">
            <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop" className="rounded-[2.5rem] shadow-2xl border border-white/10 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="didmos Authentication Platform" />
          </div>
        </div>
      </section>

      <section className="bg-[#ffc107] py-32">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 reveal">
            <h3 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter">NETPACKAGE</h3>
            <p className="text-xl text-gray-900 mb-10 font-medium leading-relaxed">Revamp of legacy courier services system</p>
            <div className="bg-white/40 p-10 rounded-3xl border border-white/50 backdrop-blur-md">
              <h4 className="font-bold text-gray-900 uppercase tracking-[0.2em] text-xs mb-6">RESULTS</h4>
              <p className="text-2xl font-bold text-gray-900 leading-tight">
                NETPACKAGE is successfully being used by <span className="italic">various big vendors of Canada</span> to process shipments economically.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 reveal">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" className="rounded-[2.5rem] shadow-2xl w-full object-cover" alt="Logistics Software NETPACKAGE" />
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
              From logistics to retail to agriculture, healthcare and government, we've helped customers in diverse sectors transform their operations and scale their businesses through innovative technologies.
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
