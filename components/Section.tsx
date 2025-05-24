
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', titleClassName = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-slate-100 ${titleClassName}`}>
          {title}
          <span className="block w-24 h-1 bg-cyan-400 mx-auto mt-3"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
