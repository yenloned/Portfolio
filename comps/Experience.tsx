import { Element } from 'react-scroll'
import experience from "../data/experience.json"
import default_icon_company from "../media/default_icon_company.png"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { ExperienceImage } from "../function/ExperienceImage";

const Experience = () => {
    const [activeTab, setActiveTab] = useState('professional');
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const [showAll, setShowAll] = useState(false);
    const initialShowCount = 3; // Show first 3 items initially

    // Effect for tab changes - reset everything
    useEffect(() => {
        setVisibleItems([]);
        setShowAll(false);
    }, [activeTab]);

    // Effect for observer - reinitialize when items change
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleItems(prev => prev.includes(index) ? prev : [...prev, index]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.experience-item');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [activeTab, showAll]);

    const professionalExperiences = experience.experience.filter(exp => exp.category === 'professional');
    const volunteerExperiences = experience.experience.filter(exp => exp.category === 'volunteer');

    const getCurrentExperiences = () => {
        const experiences = activeTab === 'professional' ? professionalExperiences : volunteerExperiences;
        return showAll ? experiences : experiences.slice(0, initialShowCount);
    };

    const getCurrentExperiencesAll = () => {
        return activeTab === 'professional' ? professionalExperiences : volunteerExperiences;
    };

    return (
        <Element name="Experience" className='relative py-20 px-4 md:px-8 lg:px-16 animated-bg'>
            {/* Dynamic Background Elements */}
            <div className="gradient-mesh"></div>
            <div className="floating-orbs">
                <div className="orb"></div>
                <div className="orb"></div>
                <div className="orb"></div>
                <div className="orb"></div>
            </div>
            <div className="glowing-dots">
                <div className="glowing-dot"></div>
                <div className="glowing-dot"></div>
                <div className="glowing-dot"></div>
                <div className="glowing-dot"></div>
                <div className="glowing-dot"></div>
            </div>
            <div className="geometric-bg">
                <div className="geometric-shape"></div>
                <div className="geometric-shape"></div>
                <div className="geometric-shape"></div>
                <div className="geometric-shape"></div>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-purple-500/20 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="gradient-text font-family_header2 text-4xl md:text-5xl font-bold mb-4">
                        Experience
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                        My professional journey and contributions to the community
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="glass rounded-2xl p-2 flex gap-2">
                        <button
                            onClick={() => setActiveTab('professional')}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                activeTab === 'professional'
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-glow'
                                    : 'text-gray-400 hover:text-white hover:bg-background-300'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                </svg>
                                Professional Work ({professionalExperiences.length})
                            </div>
                        </button>
                        <button
                            onClick={() => setActiveTab('volunteer')}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                activeTab === 'volunteer'
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-glow'
                                    : 'text-gray-400 hover:text-white hover:bg-background-300'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Volunteer & Extracurricular ({volunteerExperiences.length})
                            </div>
                        </button>
                    </div>
                </div>

                {/* Experience Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {getCurrentExperiences().map((exp, index) => (
                        <div
                            key={exp.name}
                            data-index={index}
                            className={`experience-item transition-all duration-1000 ${
                                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <div className="group glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 transform hover:scale-105 h-full">
                                {/* Header with Logo and Info */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
                                            <Image 
                                                src={ExperienceImage(exp.name)} 
                                                width="64" 
                                                height="64" 
                                                alt={exp.name}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        {exp.present && (
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="flex-1">
                                        <h3 className="font-family_header2 text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                            {exp.name}
                                        </h3>
                                        <p className="text-blue-400 font-semibold mb-2">{exp.title}</p>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    {exp.description}
                                </p>

                                {/* Time and Mode */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {exp.time}
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        exp.mode === 'Part-time' ? 'bg-blue-500/20 text-blue-400' :
                                        exp.mode === 'Internship' ? 'bg-purple-500/20 text-purple-400' :
                                        exp.mode === 'Full-time' ? 'bg-green-500/20 text-green-400' :
                                        'bg-orange-500/20 text-orange-400'
                                    }`}>
                                        {exp.mode}
                                    </span>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {exp.techs.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="px-3 py-1 bg-background-300 rounded-full text-xs font-medium text-gray-300 border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                {exp.link && (
                                    <a 
                                        href={exp.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                                    >
                                        Visit Website
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More/Less Button */}
                {getCurrentExperiencesAll().length > initialShowCount && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow hover:shadow-lg"
                        >
                            <div className="flex items-center gap-3">
                                <span>{showAll ? 'Show Less' : `Show ${getCurrentExperiencesAll().length - initialShowCount} More`}</span>
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

                {/* Empty State */}
                {getCurrentExperiences().length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 bg-background-300 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-300 mb-2">No {activeTab === 'professional' ? 'Professional' : 'Volunteer'} Experience Yet</h3>
                        <p className="text-gray-500">Check back soon for updates!</p>
                    </div>
                )}
            </div>
        </Element>
    )
}

export default Experience;