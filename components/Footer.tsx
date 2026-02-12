
import React from 'react';
import { PageType } from '../App';

interface FooterProps {
  onNavigate: (page: PageType, section?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const sections = [
    {
      title: "Company",
      links: [
        { name: "About Us", id: "about-us" },
        { name: "How We Work", id: "how-we-work" },
        { name: "Our Locations", id: "contact", section: "our-offices" },
        { name: "Contact Us", id: "contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Full-Stack Development", id: "what-we-do" },
        { name: "React.js Applications", id: "what-we-do" },
        { name: "WordPress Websites", id: "what-we-do" },
        { name: "Wix Websites", id: "what-we-do" },
        { name: "UI/UX Design", id: "what-we-do" },
        { name: "API Development", id: "what-we-do" }
      ]
    },
    {
      title: "How We Work",
      links: [
        { name: "Consult & Plan", id: "how-we-work" },
        { name: "Design & Prototype", id: "how-we-work" },
        { name: "Develop & Build", id: "how-we-work" },
        { name: "Test & Optimize", id: "how-we-work" }
      ]
    }
  ];

  return (
    <footer className="pt-24 pb-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div 
              className="flex items-center gap-2 mb-6 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center">
                <div className="w-4 h-4 rounded-sm rotate-45 bg-blue-600"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                SunnieLabs
              </span>
            </div>
            <p className="font-bold text-gray-900 mb-6">SunnieLabs Technologies Ltd.</p>
            <div className="space-y-6 text-sm text-gray-600">
              <div>
                <p className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">EMEA</p>
                <p className="font-bold text-gray-900">Islamabad</p>
                <p>3rd Floor, Evacuee Trust Complex, Aga Khan Road, F-5/1, Islamabad, Pakistan</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Gilgit</p>
                <p>Mehdi Colony, Sakwar, Gilgit, Gilgit-Baltistan, Pakistan</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">PHONE</p>
                <p>+92 310 910 7980</p>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-gray-900 mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => onNavigate(link.id as PageType, (link as any).section)}
                      className="text-sm text-gray-500 hover:text-blue-600 transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Connect With Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                 <span className="w-5 h-5 bg-blue-100 text-blue-600 flex items-center justify-center rounded">in</span>
                 <a href="#" className="hover:text-blue-600">LinkedIn</a>
              </li>
              <li className="flex items-center gap-2">
                 <span className="w-5 h-5 bg-blue-100 text-blue-600 flex items-center justify-center rounded">✉</span>
                 <a href="" target="_blank" className="hover:text-blue-600">Email</a>
                 
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 text-center gap-4">
          <p>SunnieLabs Technologies Pvt. Ltd. is registered in Pakistan with FBR (Reg. No. 3520210232873, Ref. No. 8920703-2) and operates globally, providing web development, design, and software solutions to clients across multiple countries.</p>
          <p>Copyright © 2024 SunnieLabs Technologies Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;