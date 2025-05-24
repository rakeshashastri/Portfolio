import React from 'react';
import { PROFILE_DATA, MapPinIcon } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 pt-20 sm:pt-16"> {/* Adjusted top padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-cyan-400">{PROFILE_DATA.name}</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
          {PROFILE_DATA.title}
        </p>
        <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
          {PROFILE_DATA.headline}
        </p>
        <div className="flex items-center justify-center text-slate-400 mb-10">
          <MapPinIcon className="w-5 h-5 mr-2 text-cyan-400" />
          <span>{PROFILE_DATA.location}</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto bg-slate-700 hover:bg-slate-600 text-slate-100 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll to about section">
            <svg className="w-8 h-8 text-cyan-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;