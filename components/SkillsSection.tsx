
import React from 'react';
import Section from './Section';
import { PROFILE_DATA, CommandLineIcon } from '../constants'; // Assuming CommandLineIcon
import { SkillCategory } from '../types';


const SkillItem: React.FC<{ name: string }> = ({ name }) => (
  <li className="bg-slate-800 text-slate-300 py-2 px-4 rounded-md shadow-sm hover:bg-slate-700 hover:text-cyan-400 transition-all duration-200 ease-in-out transform hover:scale-105 cursor-default">
    {name}
  </li>
);

const SkillsCategoryCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="bg-slate-800 p-6 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30">
    <div className="flex items-center mb-4">
      <CommandLineIcon className="w-7 h-7 text-cyan-400 mr-3" />
      <h3 className="text-xl font-semibold text-slate-100">{category.category}</h3>
    </div>
    <ul className="flex flex-wrap gap-2">
      {category.items.map((skill, index) => (
        <SkillItem key={index} name={skill.name} />
      ))}
    </ul>
  </div>
);

const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROFILE_DATA.skills.map((category, index) => (
          <SkillsCategoryCard key={index} category={category} />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
