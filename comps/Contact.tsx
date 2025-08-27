import { Element } from "react-scroll"
import { useEffect, useState } from 'react';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const contactMethods = [
        {
            name: "Email",
            value: "rudyyen.work@gmail.com",
            href: "mailto:rudyyen.work@gmail.com",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-500/20",
            borderColor: "border-blue-500/30"
        },
        {
            name: "LinkedIn",
            value: "linkedin.com/in/rudyyen/",
            href: "https://www.linkedin.com/in/rudyyen/",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
            ),
            color: "from-blue-600 to-blue-700",
            bgColor: "bg-blue-600/20",
            borderColor: "border-blue-600/30"
        },
        {
            name: "GitHub",
            value: "github.com/yenloned",
            href: "https://github.com/yenloned",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            ),
            color: "from-gray-700 to-gray-800",
            bgColor: "bg-gray-700/20",
            borderColor: "border-gray-700/30"
        },
        {
            name: "Discord",
            value: "283943431338852352",
            href: "https://discord.com/users/283943431338852352",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                </svg>
            ),
            color: "from-indigo-500 to-purple-600",
            bgColor: "bg-indigo-500/20",
            borderColor: "border-indigo-500/30"
        }
    ];

    return(
        <Element name="Contact" className='relative py-20 px-4 md:px-8 lg:px-16 bg-background-200'>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-blue-500/20 to-transparent"></div>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="gradient-text font-family_header2 text-4xl md:text-5xl font-bold mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
                        Ask me for anything about my journey, experience, collaboration opportunities, or potential project ideas! 
                        I'm always open to discussing new opportunities and exciting projects.
                    </p>
                </div>

                {/* Contact Methods Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {contactMethods.map((method, index) => (
                        <a
                            key={method.name}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-gray-500"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-16 h-16 ${method.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${method.borderColor} border`}>
                                    <div className={`text-white group-hover:text-white transition-colors duration-300`}>
                                        {method.icon}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-family_header2 text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {method.name}
                                    </h3>
                                    <p className="text-gray-400 font-family_body2 group-hover:text-gray-300 transition-colors">
                                        {method.value}
                                    </p>
                                </div>
                                <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="font-family_header2 text-2xl font-bold text-white mb-4">
                            Let's Work Together
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I'm passionate about creating innovative solutions and always excited to collaborate on interesting projects. 
                            Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                        </p>
                        <a 
                            href="mailto:rudyyen.work@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 glow"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send Me a Message
                        </a>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Contact