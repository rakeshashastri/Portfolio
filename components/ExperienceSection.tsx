
import React from 'react';
import Section from './Section';
import { PROFILE_DATA, BriefcaseIcon } from '../constants';
import { Experience } from '../types';

const ExperienceCard: React.FC<{ item: Experience }> = ({ item }) => (
  <div className="relative pl-8 sm:pl-12 py-6 group"> {/* Adjusted padding for timeline */}
    {/* Vertical line through timeline items */}
    <div className="absolute left-2 sm:left-4 top-0 h-full w-px bg-slate-700 group-last:hidden"></div>

    {/* Timeline Dot */}
    <div className="absolute left-0 sm:left-2 top-5 transform -translate-y-1/2"> {/* Centered dot on the line */}
      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors">
        {/* Optional: Inner icon or smaller dot if BriefcaseIcon is too large here */}
      </div>
    </div>

    {/* Content */}
    <div className="ml-4 sm:ml-6"> {/* Ensure content is to the right of the dot/line */}
      <div className="mb-1 sm:mb-2">
          <h3 className="text-xl font-semibold text-slate-100">{item.role}</h3>
          <p className="text-cyan-400 font-medium">{item.company}</p>
          <p className="text-sm text-slate-400">{item.period}</p>
      </div>
      <p className="text-slate-300 leading-relaxed my-3">{item.description}</p>
      {item.technologies && item.technologies.length > 0 && (
        <div className="mt-2">
          <p className="text-sm font-semibold text-slate-200 mb-1">Key Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, index) => (
              <span key={index} className="bg-slate-700 text-xs text-cyan-300 px-2 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="max-w-7xl mx-auto"> {/* Wider container to match other sections */}
        <div className="relative max-w-3xl mx-auto"> {/* Container for timeline items */}
          {PROFILE_DATA.experiences.map((exp, index) => (
            <ExperienceCard key={index} item={exp} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;