import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Element } from "react-scroll";
import project from "../data/project.json"
import tagCategoriesData from "../data/tagCategories.json"
import { ProjectImage } from "../function/ProjectImage";

const Project = () => {
    const [finding_tag, setFinding_tag] = useState("")
    const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
    const [showAll, setShowAll] = useState(false);
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const initialShowCount = 6; // Show first 6 items initially

    // Effect for filter changes - reset everything
    useEffect(() => {
        setVisibleProjects([]);
        setShowAll(false);
    }, [finding_tag]);

    // Effect for observer - reinitialize when items change
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
    }, [finding_tag, showAll]);

    // Matrix rain effect
    useEffect(() => {
        const matrixContainer = document.getElementById('matrix-rain');
        if (!matrixContainer) return;

        const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const columns = Math.floor(window.innerWidth / 20);
        
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.left = `${i * 20}px`;
            column.style.animationDelay = `${Math.random() * 8}s`;
            column.style.animationDuration = `${8 + Math.random() * 4}s`;
            
            let text = '';
            for (let j = 0; j < 20; j++) {
                text += characters[Math.floor(Math.random() * characters.length)] + '<br>';
            }
            column.innerHTML = text;
            
            matrixContainer.appendChild(column);
        }

        return () => {
            matrixContainer.innerHTML = '';
        };
    }, []);

    let all_tags_map = new Map();
    project.project.map((project) => {
        project.tags.map((tag) => {
            all_tags_map.set(tag, tag)
        })
    })

    const all_tags_array = Array.from(all_tags_map, ([key, value]) => (value))

    // Create tag category mapping from external JSON file
    const createTagCategoryMapping = () => {
        const mapping: { [key: string]: string } = {};
        const tagCategories = tagCategoriesData as { tagCategories: { [key: string]: string[] } };
        Object.entries(tagCategories.tagCategories).forEach(([category, tags]) => {
            tags.forEach(tag => {
                mapping[tag] = category;
            });
        });
        return mapping;
    };

    const tagCategoryMapping = createTagCategoryMapping();

    // Dynamic tag categorization using the mapping
    const categorizeTags = (tags: string[]) => {
        const categories: { [key: string]: string[] } = {};
        
        tags.forEach(tag => {
            const category = tagCategoryMapping[tag] || "Other";
            
            if (!categories[category]) {
                categories[category] = [];
            }
            categories[category].push(tag);
        });
        
        return categories;
    };

    const tagCategories = categorizeTags(all_tags_array);
    const allCategorizedTags = Object.values(tagCategories).flat();

    const ifFound = (array: any[], target: any) => {
        if(target == "") return true;
        return array.some((temp) => temp === target);
    }

    const filteredProjects = project.project.filter(project => ifFound(project.tags, finding_tag));
    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, initialShowCount);

    // Get category for a tag
    const getTagCategory = (tag: string) => {
        for (const [category, tags] of Object.entries(tagCategories)) {
            if (tags.includes(tag)) return category;
        }
        return "Other";
    };

    // Get all available categories based on current projects
    const getAvailableCategories = () => {
        const usedTags = new Set<string>();
        project.project.forEach(project => {
            project.tags.forEach(tag => usedTags.add(tag));
        });

        const availableCategories: { [key: string]: string[] } = {};
        Object.entries(tagCategories).forEach(([category, tags]) => {
            const availableTags = tags.filter(tag => usedTags.has(tag));
            if (availableTags.length > 0) {
                availableCategories[category] = availableTags;
            }
        });

        // Add uncategorized tags
        const uncategorizedTags = Array.from(usedTags).filter(tag => !allCategorizedTags.includes(tag));
        if (uncategorizedTags.length > 0) {
            availableCategories["Other"] = uncategorizedTags;
        }

        return availableCategories;
    };

    const availableCategories = getAvailableCategories();

    return(
        <Element name="Project" className='relative py-20 px-4 md:px-8 lg:px-16 animated-bg'>
            {/* Dynamic Background Elements */}
            <div className="gradient-mesh"></div>
            <div className="wave-bg">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <div className="glowing-dots">
                <div className="glowing-dot"></div>
                <div className="glowing-dot"></div>
                <div className="glowing-dot"></div>
                <div className="glowing-dot"></div>
                <div className="glowing-dot"></div>
            </div>
            <div className="animated-lines">
                <div className="animated-line"></div>
                <div className="animated-line"></div>
                <div className="animated-line"></div>
                <div className="animated-line"></div>
            </div>
            <div className="floating-squares">
                <div className="floating-square"></div>
                <div className="floating-square"></div>
                <div className="floating-square"></div>
                <div className="floating-square"></div>
                <div className="floating-square"></div>
            </div>
            <div className="pulsing-circles">
                <div className="pulsing-circle"></div>
                <div className="pulsing-circle"></div>
                <div className="pulsing-circle"></div>
                <div className="pulsing-circle"></div>
            </div>
            <div className="matrix-rain" id="matrix-rain"></div>
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

                {/* Enhanced Filter System */}
                <div className='mb-12'>
                    {/* All Projects Button */}
                    <div className="text-center mb-6">
                        <button 
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                                finding_tag === "" 
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-glow" 
                                    : "bg-background-300 text-gray-400 border border-gray-600 hover:border-purple-500 hover:text-purple-400"
                            }`}
                            onClick={() => setFinding_tag("")}
                        >
                            All Projects
                        </button>
                    </div>

                    {/* Filter Dropdown */}
                    <div className="relative max-w-md mx-auto">
                        <button 
                            className="w-full px-4 py-3 bg-background-300 border border-gray-600 rounded-lg text-gray-300 hover:border-purple-500 hover:text-purple-400 transition-all duration-300 flex items-center justify-between"
                            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                        >
                            <span>{finding_tag || "Filter by category..."}</span>
                            <svg 
                                className={`w-5 h-5 transition-transform duration-300 ${showFilterDropdown ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {showFilterDropdown && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-background-400 border border-gray-600 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
                                {Object.entries(availableCategories).map(([category, tags]) => (
                                    <div key={category} className="border-b border-gray-600 last:border-b-0">
                                        <div className="px-4 py-2 bg-background-500 text-purple-400 font-medium text-sm">
                                            {category}
                                        </div>
                                        {tags.map((tag) => (
                                            <button
                                                key={tag}
                                                className={`w-full text-left px-4 py-2 text-sm hover:bg-background-300 transition-colors duration-200 ${
                                                    finding_tag === tag ? 'text-purple-400 bg-purple-500/20' : 'text-gray-300'
                                                }`}
                                                onClick={() => {
                                                    setFinding_tag(tag);
                                                    setShowFilterDropdown(false);
                                                }}
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Active Filter Display */}
                    {finding_tag && (
                        <div className="text-center mt-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
                                <span className="text-purple-400 text-sm">Filtered by: {finding_tag}</span>
                                <button 
                                    onClick={() => setFinding_tag("")}
                                    className="text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project, index) => (
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
                                        {project.github_link && (
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
                                        )}
                                        
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

                {/* Show More/Less Button */}
                {filteredProjects.length > initialShowCount && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow hover:shadow-lg"
                        >
                            <div className="flex items-center gap-3">
                                <span>{showAll ? 'Show Less' : `Show ${filteredProjects.length - initialShowCount} More`}</span>
                                <svg 
                                    className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                )}

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