
import React from 'react';
import Section from './Section';
import { PROFILE_DATA, ExternalLinkIcon, GitHubIcon } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 flex flex-col">
    <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover"/>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-slate-100 mb-2">{project.title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
      <div className="mb-4">
        <p className="text-sm font-semibold text-slate-200 mb-1">Technologies:</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-slate-700 text-xs text-cyan-300 px-2 py-1 rounded-full">{tech}</span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex space-x-3">
        {project.liveUrl && project.liveUrl !== "#" && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLinkIcon className="w-4 h-4 mr-1" />
            Live Demo
          </a>
        )}
        {project.repoUrl && project.repoUrl !== "#" && (
           <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-slate-400 hover:text-slate-300 transition-colors"
          >
            <GitHubIcon className="w-4 h-4 mr-1" />
            Source Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROFILE_DATA.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
