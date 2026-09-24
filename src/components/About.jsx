import React, { useEffect, useRef } from 'react';
import aboutImage from '../assets/about_section/about_section.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = ['HTML / CSS / JavaScript', 'MySQL', 'Excel + AI', 'Advanced Python', 'AI Automation'];

const About = () => {
  const introRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    [introRef, imageRef, cardRef].forEach((ref, index) => {
      if (!ref.current) return;
      gsap.fromTo(ref.current, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.1, delay: index * 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none reverse' }
      });
    });
  }, []);

  return (
    <section id="about" className="min-h-screen bg-[#050505] text-white pt-24 pb-0 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10">
        <h2 ref={introRef} className="text-center text-[18vw] md:text-[8rem] lg:text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none mb-10 md:mb-16">
          About
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center pb-20">
          <div ref={imageRef} className="flex justify-center">
            <img src={aboutImage} alt="Abdul Rashid" className="w-56 md:w-72 lg:w-80 object-contain drop-shadow-2xl" />
          </div>

          <div ref={cardRef} className="relative bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl text-center lg:text-left">
            <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-light">
              Hi, I'm <span className="text-white font-bold">Abdul Rashid Qureshi</span>, a BCA student at Maulana Azad University Jodhpur with a strong interest in <span className="text-white font-medium">data analysis, Python, Excel, MySQL, and AI automation</span>. I enjoy turning data into useful insights and building practical solutions with technology. I'm continuously learning and working toward becoming a skilled data analyst and AI automation professional.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
              {skills.map((skill) => <span key={skill} className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs md:text-sm">{skill}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col border-t border-white/5 bg-[#030303] py-4 mt-auto -mx-6 md:-mx-16 overflow-hidden">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee w-max">
            {[...skills, ...skills, ...skills, ...skills].map((item, i) => (
              <div key={i} className="flex items-center"><span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span><span className="text-gray-700 font-bold px-2 md:px-4">.</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
