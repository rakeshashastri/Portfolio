import React from 'react';
import Section from './Section';
import { PROFILE_DATA, StackOverflowIcon } from '../constants';

const AboutSection: React.FC = () => {
  const stackOverflowProfileUrl = PROFILE_DATA.contactLinks.find(link => link.name === 'Stack Overflow')?.url;

  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <img 
            src={PROFILE_DATA.profileImageUrl || `https://picsum.photos/seed/${PROFILE_DATA.name.replace(/\s+/g, '')}/300/300`} 
            alt={PROFILE_DATA.name}
            className="rounded-full shadow-xl w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-cyan-500"
          />
        </div>
        <div className="md:col-span-2 text-slate-300 text-lg leading-relaxed">
          <p className="mb-6 text-center sm:text-left">
            {PROFILE_DATA.about}
          </p>
          
          <div className="mt-6 bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
              <StackOverflowIcon className="w-6 h-6 mr-2 text-orange-500" />
              Stack Overflow Snapshot
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm mb-4">
              <div>
                <span className="font-semibold text-slate-200">Reputation:</span>
                <span className="ml-2 text-cyan-400">{PROFILE_DATA.stackOverflowStats.reputation}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Reached:</span>
                <span className="ml-2 text-cyan-400">{PROFILE_DATA.stackOverflowStats.reached}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Answers:</span>
                <span className="ml-2 text-cyan-400">{PROFILE_DATA.stackOverflowStats.answers}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Questions:</span>
                <span className="ml-2 text-cyan-400">{PROFILE_DATA.stackOverflowStats.questions}</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-slate-200 mb-1">Top Tags:</p>
              <div className="flex flex-wrap gap-2">
                {PROFILE_DATA.stackOverflowStats.topTags.map((tag, index) => (
                  <span key={index} className="bg-slate-700 text-xs text-cyan-300 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            {stackOverflowProfileUrl && (
              <a 
                href={stackOverflowProfileUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
              >
                View Profile on Stack Overflow &rarr;
              </a>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;