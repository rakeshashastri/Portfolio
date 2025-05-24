
import React from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';
import { ContactLink } from '../types';

const ContactCard: React.FC<{ link: ContactLink }> = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={link.ariaLabel}
    className="flex flex-col items-center justify-center p-6 bg-slate-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-slate-700 hover:shadow-cyan-500/30 group"
  >
    <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 mb-3">
      {/* MODIFIED: Removed 'as React.ReactElement' cast */}
      {React.cloneElement(link.icon, { className: "w-10 h-10" })}
    </span>
    <span className="text-slate-200 group-hover:text-slate-100 font-medium transition-colors duration-300">{link.name}</span>
  </a>
);


const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <p className="text-center text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of something exciting. Feel free to reach out!
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {PROFILE_DATA.contactLinks.map((link, index) => (
          <ContactCard key={index} link={link} />
        ))}
      </div>
    </Section>
  );
};

export default ContactSection;