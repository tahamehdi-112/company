
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PageType } from '../App';

const services = [
  {
    title: "Exceptional Quality & Precision",
    description: "At Sunnie Labs, quality is at the core of everything we do. We act not just as developers, but as strategic technology partners, handling projects of any scale with meticulous attention to detail. Our work isn’t complete until you’re fully satisfied, and with a client satisfaction rating of 97%, you can trust your project is in expert hands."
  },
  {
    title: "Innovative & Scalable Technology",
    description: "We don’t just deliver projects we design solutions for the future. Our team leverages the latest technology trends and follows specialized processes to create scalable, high performing software that grows with your business."
  },
  {
    title: "Fast & Reliable Delivery",
    description: "From kickoff to launch, Sunnie Labs ensures your project moves efficiently without compromising quality. We value your time and are committed to delivering reliable, production-ready solutions on schedule."
  },
  {
    title: "Flexible Team Scaling",
    description: "Need extra hands on deck? Access our pool of senior software specialists to expand your development capacity on demand. We can build a tailored offshore team with the right expertise for your project, allowing your core team to focus on business priorities."
  },
  {
    title: "End to End Software Solutions",
    description: "Sunnie Labs offers a full lifecycle approach to software development—from ideation and design to deployment and ongoing support. Our team collaborates closely with yours, aligning with your time zones to ensure seamless communication and maximum productivity."
  }
];

interface ServicesStickyProps {
  onNavigate: (page: PageType) => void;
}

const ServicesSticky: React.FC<ServicesStickyProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 lg:py-24 bg-gray-50 overflow-visible">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 lg:mb-16 max-w-4xl leading-tight">
          The Value You Gain With Sunnie Labs Development Services
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative">
          
          <div className="w-full lg:w-[42%] order-1 lg:order-2 lg:sticky lg:top-32 self-start z-10">
            <div className="aspect-[16/10] lg:aspect-[4/5] w-full rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-xl lg:shadow-2xl border-4 lg:border-8 border-white bg-gray-200">
              <img
                src="/company/dist/assets/home1.jpg"
                alt="Development Team Working"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-6 rounded-2xl shadow-2xl hidden lg:block">
               <div className="text-3xl font-bold">97%</div>
               <div className="text-[10px] uppercase tracking-widest font-bold opacity-80">Client Satisfaction</div>
            </div>
          </div>

          <div className="w-full lg:w-[58%] order-2 lg:order-1 space-y-16 lg:space-y-24 pb-12 lg:pb-20">
            {services.map((service, index) => (
              <div key={index} className="flex gap-5 lg:gap-8 group reveal">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg lg:pr-12">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="pt-4 lg:pt-8 flex flex-wrap items-center gap-4 group cursor-pointer reveal">
               <span className="font-bold text-gray-900 text-lg">Have a question?</span>
               <button 
                onClick={() => onNavigate('contact')}
                className="text-blue-600 font-bold text-lg hover:underline transition-all flex items-center gap-3"
               >
                  Speak to an expert
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:translate-x-2 transition-all shadow-lg group-hover:shadow-blue-500/40">
                    <ChevronRight className="w-6 h-6" />
                  </div>
               </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSticky;
