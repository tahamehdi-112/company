
import React from 'react';
import { PageType } from '../App';

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
             At Sunnie Labs, we focus on delivering high performance digital solutions tailored to your business goals. We are more than just a development team we act as a strategic technology partner, capable of handling projects of any scale and complexity while maintaining exceptional quality standards.
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
             <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                <path d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" fill="#2563eb" />
                <path d="M50 25 L75 40 L75 60 L50 75 L25 60 L25 40 Z" fill="#1d4ed8" />
                <rect x="40" y="40" width="20" height="20" fill="white" opacity="0.1" />
                <path d="M50 35 L65 45 L65 55 L50 65 L35 55 L35 45 Z" fill="#3b82f6" />
             </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
