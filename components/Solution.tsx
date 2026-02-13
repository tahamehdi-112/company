
import React from 'react';
import { PageType } from '../App';
import demo from './assests/demo.png';

interface SolutionProps {
  onNavigate: (page: PageType) => void;
}

const Solution: React.FC<SolutionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
            Complete Digital Solutions for<br></br>  Modern Businesses
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
             At WebLance, we focus on delivering high performance digital solutions tailored to your business goals. We are more than just a development team we act as a strategic technology partner, capable of handling projects of any scale and complexity while maintaining exceptional quality standards.
            </p>
            <p>
             From lightweight web applications to scalable SaaS platforms, we design and build solutions that improve efficiency and drive sustainable growth. Our engineers stay aligned with the latest advancements in modern development, cloud infrastructure, DevOps practices, and security to ensure reliable, future ready results for our clients.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('about-us')}
            className="mt-10 px-8 py-3 bg-[#1e293b] text-white font-semibold rounded hover:bg-gray-800 transition-colors"
          >
            Read more
          </button>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            <img src = {demo} className="w-full h-full object-cover rounded-2xl "></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
