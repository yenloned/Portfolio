import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Element } from "react-scroll";
import project from "../data/project.json"
import { ProjectImage } from "../function/ProjectImage";

const Project = () => {
    const [finding_tag, setFinding_tag] = useState("")
    const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleProjects(prev => prev.includes(index) ? prev : [...prev, index]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.project-item');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    let all_tags_map = new Map();
    project.project.map((project) => {
        project.tags.map((tag) => {
            all_tags_map.set(tag, tag)
        })
    })

    const all_tags_array = Array.from(all_tags_map, ([key, value]) => (value))

    const ifFound = (array: any[], target: any) => {
        if(target == "") return true;
        return array.some((temp) => temp === target);
    }

    const filteredProjects = project.project.filter(project => ifFound(project.tags, finding_tag));

    return(
        <Element name="Project" className='relative py-20 px-4 md:px-8 lg:px-16 bg-background-200'>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-pink-500/20 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="gradient-text font-family_header2 text-4xl md:text-5xl font-bold mb-4">
                        Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                        Showcasing my technical skills through innovative projects
                    </p>
                </div>

                {/* Filter Tags */}
                <div className='flex flex-wrap gap-3 justify-center mb-12'>
                    <button 
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                            finding_tag === "" 
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-glow" 
                                : "bg-background-300 text-gray-400 border border-gray-600 hover:border-purple-500 hover:text-purple-400"
                        }`}
                        onClick={() => setFinding_tag("")}
                    >
                        All Projects
                    </button>
                    {all_tags_array.map((tag) => (
                        <button 
                            key={tag}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                                finding_tag === tag 
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-glow" 
                                    : "bg-background-300 text-gray-400 border border-gray-600 hover:border-purple-500 hover:text-purple-400"
                            }`}
                            onClick={() => setFinding_tag(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={project.name}
                            data-index={index}
                            className={`project-item group transition-all duration-1000 h-full ${
                                visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <div className="relative glass rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden flex-shrink-0">
                                    <Image 
                                        src={ProjectImage(project.name)} 
                                        width="512" 
                                        height="512" 
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    
                                    {/* Project Title Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="font-family_header2 text-xl font-bold text-white mb-2">
                                            {project.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techs.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="px-3 py-1 bg-background-300 rounded-full text-xs font-medium text-gray-300 border border-gray-600"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <p className='text-gray-400 text-sm leading-relaxed mb-4 flex-1'>
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex}
                                                className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md text-xs font-medium border border-purple-500/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className='flex gap-3 mt-auto'>
                                        <a 
                                            href={project.github_link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-background-300 rounded-lg text-gray-300 hover:bg-background-100 hover:text-white transition-all duration-300 border border-gray-600 hover:border-gray-500"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                            Code
                                        </a>
                                        
                                        {project.demo_link && (
                                            <a 
                                                href={project.demo_link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                                </svg>
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Projects Coming */}
                <div className='mt-16 text-center'>
                    <h3 className="gradient-text font-family_header2 text-3xl font-bold mb-4">
                        More Projects Coming Soon...
                    </h3>
                    <p className="text-gray-400 text-lg">
                        I'm constantly working on new and exciting projects
                    </p>
                </div>
            </div>
        </Element>
    )
}

export default Project;