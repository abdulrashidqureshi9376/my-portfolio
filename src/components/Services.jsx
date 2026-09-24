import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  { id: '01', title: 'DATA ANALYSIS', description: 'Cleaning, exploring and analyzing data to find useful patterns, trends and actionable insights.', capabilities: ['Data cleaning and preparation', 'Exploratory data analysis', 'Charts and dashboards', 'Business insights'] },
  { id: '02', title: 'PYTHON', description: 'Using Python for data handling, analysis, automation and practical problem solving.', capabilities: ['Python fundamentals', 'Pandas and data handling', 'Automation scripts', 'Analysis workflows'] },
  { id: '03', title: 'EXCEL + AI', description: 'Building smart spreadsheets and using AI to make repetitive analysis and reporting faster.', capabilities: ['Advanced Excel formulas', 'Data cleaning', 'Reports and dashboards', 'AI-assisted workflows'] },
  { id: '04', title: 'MYSQL', description: 'Working with relational data using SQL queries, filtering, joins and structured database analysis.', capabilities: ['SQL queries', 'Joins and filtering', 'Database basics', 'Data extraction'] },
  { id: '05', title: 'AI AUTOMATION', description: 'Exploring practical AI-powered automations that reduce repetitive work and improve productivity.', capabilities: ['Workflow automation', 'AI tools integration', 'Prompt-based workflows', 'Task automation'] }
];

const processSteps = [
  ['01', 'Understand', 'Understand the problem, data and expected result.'],
  ['02', 'Prepare', 'Clean, organize and prepare the data.'],
  ['03', 'Analyze', 'Find patterns and turn data into insights.'],
  ['04', 'Automate', 'Use Python, Excel and AI to improve workflows.']
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const titleRef = useRef(null);
  const itemRefs = useRef([]);
  const processRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) gsap.fromTo(titleRef.current, { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } });
    if (processRef.current) gsap.fromTo(processRef.current.children, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .8, stagger: .12, ease: 'power3.out', scrollTrigger: { trigger: processRef.current, start: 'top 85%' } });
    itemRefs.current.forEach((item) => item && gsap.fromTo(item, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .8, scrollTrigger: { trigger: item, start: 'top 90%' } }));
  }, []);

  return (
    <section id="service" className="bg-[#050505] text-white pt-12 pb-24 px-6 md:px-16 relative overflow-hidden">
      <div className="mb-16">
        <h3 className="text-xs md:text-sm font-bold tracking-widest text-[#ccff00] uppercase mb-8">MY WORKFLOW</h3>
        <div ref={processRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map(([num, title, desc]) => <div key={num} className="bg-white/5 border border-white/10 rounded-2xl p-6"><span className="text-3xl font-black text-[#ccff00] block mb-3">{num}</span><h4 className="text-xl font-bold uppercase mb-2">{title}</h4><p className="text-gray-400 text-sm leading-relaxed">{desc}</p></div>)}
        </div>
      </div>

      <div className="flex justify-end w-full pb-12"><h2 ref={titleRef} className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 leading-[.9] text-right">WHAT I<br/>CAN DO</h2></div>

      <div className="relative border-t border-white/20 -mx-6 md:-mx-16">
        {servicesData.map((service, index) => {
          const open = activeIndex === index;
          return <div key={service.id} ref={el => itemRefs.current[index] = el} className={`border-b border-white/20 py-6 px-6 md:px-16 cursor-pointer transition-all ${open ? 'bg-[#ccff00] text-black' : ''}`} onClick={() => setActiveIndex(open ? null : index)}>
            <div className="flex justify-between items-start gap-6"><div className="flex gap-6 md:gap-16"><span className={`text-xl md:text-3xl font-medium ${open ? 'text-black' : 'text-white'}`}>{service.id}</span><h3 className={`text-lg md:text-2xl font-black tracking-wide ${open ? 'text-black' : 'text-white'}`}>{service.title}</h3></div><span className="text-2xl">{open ? '−' : '+'}</span></div>
            {open && <div className="mt-5 ml-10 md:ml-24 max-w-3xl"><p className="text-sm md:text-base leading-relaxed mb-5">{service.description}</p><div className="flex flex-wrap gap-2">{service.capabilities.map(c => <span key={c} className="text-xs px-3 py-2 rounded-full border border-black/20">{c}</span>)}</div></div>}
          </div>;
        })}
      </div>
    </section>
  );
};

export default Services;
