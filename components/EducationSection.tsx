import React from 'react';
import Section from './Section';
import { PROFILE_DATA, AcademicCapIcon } from '../constants';
import { EducationItem } from '../types';

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => (
  <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30">
    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
        <AcademicCapIcon className="w-12 h-12 text-cyan-400" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-slate-100">{item.degree}</h3>
        <p className="text-cyan-400 font-medium">{item.institution}</p>
        <p className="text-sm text-slate-400">{item.period}</p>
        {item.description && <p className="text-slate-300 leading-relaxed mt-2">{item.description}</p>}
      </div>
    </div>
  </div>
);

const EducationSection: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          {PROFILE_DATA.education.map((edu, index) => (
            <EducationCard key={index} item={edu} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;