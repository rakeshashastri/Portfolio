
import React from 'react';
import Section from './Section';
import { PROFILE_DATA, AcademicCapIcon } from '../constants';
import { EducationItem } from '../types';

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => (
  <div className="bg-slate-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30">
    <div className="flex items-start mb-2">
      <AcademicCapIcon className="w-8 h-8 text-cyan-400 mr-4 mt-1 flex-shrink-0" />
      <div>
        <h3 className="text-xl font-semibold text-slate-100">{item.degree}</h3>
        <p className="text-cyan-400 font-medium">{item.institution}</p>
        <p className="text-sm text-slate-400">{item.period}</p>
      </div>
    </div>
    {item.description && <p className="text-slate-300 leading-relaxed mt-2 pl-12">{item.description}</p>}
  </div>
);

const EducationSection: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="max-w-2xl mx-auto space-y-8">
        {PROFILE_DATA.education.map((edu, index) => (
          <EducationCard key={index} item={edu} />
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
