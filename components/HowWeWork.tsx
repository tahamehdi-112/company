
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { PageType } from '../App';
import workWith from './assests/withus.jpg';
import doIt from './assests/doit.jpg';

const engagementModels = [
  {
    title: "Resource Augmentation",
    desc: "Scale your development team quickly with skilled professionals to meet project deadlines and accelerate time-to-market.",
    ourResponsibility: "Build a team with the right skills and ensure high productivity",
    clientResponsibility: "Provide requirements and manage workload"
  },
  {
    title: "Dedicated Team",
    desc: "Hire a skilled, project-focused team to turn your product ideas into reality, including development, engineering, and PoC delivery.",
    ourResponsibility: "Deliver projects on time and within budget",
    clientResponsibility: "Provide product vision, scope, and timeline"
  }
];

const developmentStages = [
  {
    title: "Pre-Discovery Stage",
    content: "Initial alignment on business objectives and high-level project feasibility."
  },
  {
    title: "Discovery stage",
    content: "Deep dive into technical requirements, user personas, and market analysis."
  },
  {
    title: "Design stage",
    content: "At the Design stage, We develop a detailed design plan to show the solution functionality.",
    active: true
  },
  {
    title: "Active Development",
    content: "Full-cycle coding with agile methodology, continuous integration, and frequent updates."
  },
  {
    title: "QA and Testing",
    content: "Rigorous automated and manual testing to ensure zero-defect delivery."
  },
  {
    title: "Deployment and Release stage",
    content: "Launching the product to staging and production environments with zero downtime."
  },
  {
    title: "Maintenance",
    content: "Ongoing post-launch support, security updates, and feature enhancements."
  }
];

interface HowWeWorkProps {
  onNavigate: (page: PageType) => void;
}

const HowWeWork: React.FC<HowWeWorkProps> = ({ onNavigate }) => {
  const [activeStage, setActiveStage] = useState(2); 

  return (
    <div className="">
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
        <img 
          src={workWith}
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          alt="Team collaboration" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-white text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-8 reveal tracking-tight">HOW WE WORK</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90 leading-relaxed reveal font-medium" style={{ transitionDelay: '0.2s' }}>
           Our expert team delivers scalable, high-quality web and software solutions through efficient processes tailored to your business needs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Engagement Models</h2>
            <p className="max-w-3xl mx-auto text-gray-500 text-lg">
              We offer flexible collaboration models to deliver high-quality, scalable web and software solutions that create long-term value for our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagementModels.map((model, i) => (
              <div 
                key={i} 
                className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group reveal relative overflow-hidden flex flex-col justify-between min-h-[450px]"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{model.title}</h3>
                  <p className="text-gray-600 mb-10 leading-relaxed text-lg">{model.desc}</p>
                  <div className="space-y-6">
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">Our responsibility:</span>
                      <span className="text-gray-600">{model.ourResponsibility}</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">Client responsibility:</span>
                      <span className="text-gray-600">{model.clientResponsibility}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex justify-end">
                   <button 
                    onClick={() => onNavigate('contact')}
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm"
                   >
                      <ChevronRight className="w-6 h-6" />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0a1128] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20 reveal">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Development Process</h2>
            <p className="max-w-2xl text-xl opacity-70">
              We build clear and streamlined development processes to solve problems of any complexity.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2 w-full space-y-4 reveal">
              {developmentStages.map((stage, i) => (
                <div key={i} className={`border-b border-white/10 transition-all duration-300 ${activeStage === i ? 'bg-white/5 pb-8' : 'pb-4'}`}>
                  <button onClick={() => setActiveStage(activeStage === i ? -1 : i)} className={`w-full flex items-center justify-between text-left py-4 px-6 transition-all duration-300 ${activeStage === i ? 'text-blue-500' : 'text-white'}`}>
                    <span className="text-xl md:text-2xl font-bold">{stage.title}</span>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${activeStage === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${activeStage === i ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-lg opacity-70 leading-relaxed border-l-2 border-blue-600 pl-6">{stage.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-1/2 w-full reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/5">
                <img src={doIt} className="w-full h-[600px] object-cover" alt="Process and Design" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-12 left-12">
                   <div className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-sm uppercase tracking-widest">Digital Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
