import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
// import SkillsSection from './components/SkillsSection'; // Temporarily hidden
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-[#121212] min-h-screen flex">
       <Navbar />
       <div className="flex-1 ml-64 md:ml-64 flex flex-col min-h-screen">
         <main className="flex-1">
           <HeroSection />
           <AboutSection />
           {/* <SkillsSection /> */} {/* Temporarily hidden */}
           <ExperienceSection />
           <ProjectsSection />
           <EducationSection />
           {/* Contact links moved to footer */}
         </main>
         <Footer />
       </div>
       <BackToTopButton />
    </div>
  );
};

export default App;