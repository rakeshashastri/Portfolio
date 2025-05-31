
import React from 'react';
import { PROFILE_DATA } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-slate-400 py-8 text-center w-full mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 mb-4">
          {PROFILE_DATA.contactLinks.map((link) => (
             link.name !== "Email" && // Optionally exclude email from icon list here
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={link.ariaLabel}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {/* MODIFIED: Removed 'as React.ReactElement' cast */}
              {React.cloneElement(link.icon, { className: "w-6 h-6" })}
            </a>
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} {PROFILE_DATA.name}. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;