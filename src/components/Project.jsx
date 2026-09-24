import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { name: 'Data Analysis Project', title: <>DATA ANALYSIS <br/><span className="font-light italic text-gray-300 font-serif">Project</span></>, category: 'Data Analytics', tools: 'Python, Excel, MySQL', description: 'A space for my upcoming data analysis project, where I will showcase data cleaning, analysis, dashboards and insights.', image: null },
  { name: 'AI Automation Project', title: <>AI AUTOMATION <br/><span className="font-light italic text-gray-300 font-serif">Project</span></>, category: 'AI Automation', tools: 'Python, AI Tools, Automation', description: 'An upcoming practical automation project focused on reducing repetitive tasks with AI-powered workflows.', image: null }
];

const Project = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  useEffect(() => {
    if (headerRef.current) gsap.fromTo(headerRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: headerRef.current, start: 'top 85%' } });
    cardsRef.current.forEach(card => card && gsap.fromTo(card, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: card, start: 'top 85%' } }));
  }, []);

  return <section id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16">
    <div ref={headerRef} className="mb-16 lg:mb-28"><h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 leading-[.9]">SELECTED<br/>PROJECTS</h2><p className="text-gray-400 mt-6 max-w-xl">Projects will be added here as I build and complete my data analysis and AI automation work.</p></div>
    <div className="flex flex-col gap-16 md:gap-24">
      {projects.map((proj, idx) => <div key={proj.name} ref={el => cardsRef.current[idx] = el} className={`flex flex-col ${idx % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-8 md:gap-12 lg:gap-16`}>
        <div className="w-full lg:w-6/12 aspect-[16/10] bg-gradient-to-br from-[#161616] to-[#080808] rounded-lg border border-white/10 flex items-center justify-center overflow-hidden"><div className="text-center px-6"><span className="text-[#ccff00] text-xs tracking-widest uppercase">Coming Soon</span><h3 className="text-2xl md:text-4xl font-black mt-3">{idx === 0 ? 'DATA + INSIGHTS' : 'AI + AUTOMATION'}</h3></div></div>
        <div className="w-full lg:w-5/12 flex flex-col items-start"><span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-3">0{idx + 1}</span><h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] uppercase mb-5">{proj.title}</h3><div className="flex flex-wrap gap-2 mb-5"><span className="bg-[#ccff00]/10 text-[#ccff00] text-xs px-3 py-1 rounded-full border border-[#ccff00]/20">{proj.category}</span><span className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full border border-white/10">{proj.tools}</span></div><p className="text-gray-400 text-sm md:text-base leading-relaxed">{proj.description}</p></div>
      </div>)}
    </div>
  </section>;
};
export default Project;
