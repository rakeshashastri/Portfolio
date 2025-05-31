import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, CodeBracketIcon } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed h-full w-64 z-50 transition-all duration-300 ease-in-out bg-[#1a1a1a]/95 shadow-lg backdrop-blur-md flex flex-col`}>
      <div className="p-6">
        <a href="#" className="flex items-center text-2xl font-bold text-slate-100 hover:text-cyan-400 transition-colors mb-8">
          <CodeBracketIcon className="w-8 h-8 mr-2 text-cyan-400" />
          Rakesha Shastri
        </a>
        <div className="hidden md:block">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-3 rounded-md text-sm font-medium text-slate-300 hover:bg-[#242424] hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="md:hidden absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-[#242424] inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a1a1a] focus:ring-cyan-400"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`md:hidden fixed inset-0 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="relative h-full w-64 bg-[#1a1a1a] shadow-lg">
          <div className="px-4 pt-16 pb-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-md text-base font-medium text-slate-300 hover:bg-[#242424] hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Navbar;