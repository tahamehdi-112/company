
import React, { useState } from 'react';
import { Globe, ChevronRight, Menu, X, ChevronDown } from 'lucide-react';
import { PageType } from '../App';
import code from './assests/code.jpg';

interface HeaderProps {
  isScrolled: boolean;
  onNavigate: (page: PageType, section?: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, onNavigate, currentPage }) => {
  const [isWhoWeAreHovered, setIsWhoWeAreHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileWhoWeAreExpanded, setIsMobileWhoWeAreExpanded] = useState(false);

  const navLinks = [
    { name: 'Who We Are', id: 'about-us', hasMenu: true },
    { name: 'What We Do', id: 'what-we-do' },
    { name: 'How We Work', id: 'how-we-work' },
  ];

  const megaMenuLinks = {
    col1: [
      { name: 'About Us', id: 'about-us', section: '' },
      { name: 'Our Vision', id: 'about-us', section: 'our-vision' },
    ],
    col2: [
      { name: 'Leadership Team', id: 'about-us', section: 'leadership-team' },
      { name: 'Locations', id: 'contact', section: 'our-offices' },
    ]
  };

  const isHeaderActive = isScrolled || isWhoWeAreHovered || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHeaderActive ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
      onMouseLeave={() => setIsWhoWeAreHovered(false)}
    >
      <div className={`container mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${isHeaderActive ? 'py-4' : 'py-6'}`}>
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer relative z-[60]"
          onClick={() => onNavigate('home')}
        >
          <div className={`w-8 h-8 rounded-full border-2 ${isHeaderActive ? 'border-blue-600' : 'border-white'} flex items-center justify-center transition-colors duration-300`}>
            <div className={`w-4 h-4 rounded-sm rotate-45 ${isHeaderActive ? 'bg-blue-600' : 'bg-white'} transition-colors duration-300`}></div>
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isHeaderActive ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>
            SunnieLabs
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative h-full py-2"
              onMouseEnter={() => link.hasMenu ? setIsWhoWeAreHovered(true) : setIsWhoWeAreHovered(false)}
            >
              <button
                onClick={() => {
                  onNavigate(link.id as PageType);
                }}
                className={`text-sm font-semibold transition-all duration-300 relative pb-1 ${
                  isHeaderActive 
                    ? (currentPage === link.id || (link.hasMenu && currentPage === 'about-us') ? 'text-blue-600' : 'text-gray-800') 
                    : 'text-white'
                } hover:text-blue-500`}
              >
                {link.name}
                {(currentPage === link.id || (link.hasMenu && (isWhoWeAreHovered || currentPage === 'about-us'))) && (
                   <span className="absolute bottom-[-1.5rem] left-0 w-full h-1 bg-blue-600 rounded-t-full transition-all duration-300"></span>
                )}
              </button>
            </div>
          ))}
          
          <div className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-300 ${isHeaderActive ? 'text-gray-800' : 'text-white'}`}>
            <Globe className="w-4 h-4" />
            <span>EN</span>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className={`px-8 py-2.5 rounded-full text-white font-bold transition-all duration-300 ${
              isHeaderActive ? 'bg-[#e31e24] hover:bg-red-700' : 'bg-[#e31e24] hover:bg-red-700'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden relative z-[60] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-8 h-8 text-gray-900 transition-colors`} />
          ) : (
            <Menu className={`w-8 h-8 ${isHeaderActive ? 'text-gray-900' : 'text-white'} transition-colors`} />
          )}
        </button>
      </div>

      {/* Desktop Mega Menu */}
      <div 
        className={`hidden lg:block absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 transform origin-top ${
          isWhoWeAreHovered ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
        }`}
        onMouseEnter={() => setIsWhoWeAreHovered(true)}
      >
        <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 flex gap-24 pl-20">
            <div className="space-y-6">
              {megaMenuLinks.col1.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => { onNavigate(link.id as PageType, link.section); setIsWhoWeAreHovered(false); }}
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors text-left whitespace-nowrap"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="space-y-6">
              {megaMenuLinks.col2.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => { onNavigate(link.id as PageType, link.section); setIsWhoWeAreHovered(false); }}
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors text-left whitespace-nowrap"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-end">
            <div className="bg-[#f8f9fa] rounded-2xl p-8 max-w-xl flex gap-8 items-center border border-gray-50">
              <div className="w-1/2 h-48 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={code}
                  alt="Accurate Estimate" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2">
                <h4 className="text-gray-900 font-bold text-lg mb-6 leading-tight">
                  Are you looking for an accurate estimate of your software development project budget?
                </h4>
                <button onClick={() => { onNavigate('contact'); setIsWhoWeAreHovered(false); }} className="flex items-center gap-2 text-blue-600 font-bold group">
                  Please contact us 
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 bg-white z-[50] transition-transform duration-500 transform lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-12 overflow-y-auto">
          <div className="flex flex-col gap-6 mb-12">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-4">
                {link.hasMenu ? (
                  <>
                    <button 
                      className="w-full flex items-center justify-between text-2xl font-bold text-gray-900 text-left py-2"
                      onClick={() => setIsMobileWhoWeAreExpanded(!isMobileWhoWeAreExpanded)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isMobileWhoWeAreExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isMobileWhoWeAreExpanded ? 'max-h-[500px] opacity-100 mt-4 ml-4' : 'max-h-0 opacity-0'}`}>
                      <div className="space-y-4 pb-4">
                        {[...megaMenuLinks.col1, ...megaMenuLinks.col2].map((subLink) => (
                          <button 
                            key={subLink.name} 
                            className="block text-gray-500 font-medium hover:text-blue-600 transition-colors text-left w-full"
                            onClick={() => { onNavigate(subLink.id as PageType, subLink.section); setIsMobileMenuOpen(false); }}
                          >
                            {subLink.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <button 
                    className="text-2xl font-bold text-gray-900 block py-2 text-left w-full"
                    onClick={() => { onNavigate(link.id as PageType); setIsMobileMenuOpen(false); }}
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto space-y-8">
            <button
              className="w-full bg-[#e31e24] text-white py-4 rounded-xl font-bold text-lg shadow-xl"
              onClick={() => { onNavigate('contact'); setIsMobileMenuOpen(false); }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
