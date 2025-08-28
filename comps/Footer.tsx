import { Link } from "react-scroll"
import { useState, useEffect } from "react"

const Footer = () => {
    const [currentYear, setCurrentYear] = useState("");
    const lastUpdate = "27 Aug 2025";

    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
    }, []);

    return (
        <>
            <div className="relative bg-background-400 py-16 px-4 md:px-8 lg:px-16 animated-bg">
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
                <div className="geometric-bg">
                    <div className="geometric-shape"></div>
                    <div className="geometric-shape"></div>
                    <div className="geometric-shape"></div>
                    <div className="geometric-shape"></div>
                </div>
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        {/* Main Footer Content */}
                        <div className="mb-8">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">RY</span>
                                </div>
                                <span className="font-family_header2 text-2xl font-bold gradient-text">
                                    Rudy Yen
                                </span>
                            </div>
                            <p className="text-gray-400 font-family_body2 text-lg max-w-2xl mx-auto leading-relaxed">
                                Passionate about creating innovative solutions and pushing the boundaries of technology. 
                                Always excited to collaborate on interesting projects and learn new things.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-wrap justify-center gap-8 mb-8">
                            <Link 
                                to="About" 
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500}
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-family_body2"
                            >
                                About
                            </Link>
                            <Link 
                                to="Experience" 
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500}
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-family_body2"
                            >
                                Experience
                            </Link>
                            <Link 
                                to="Project" 
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500}
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-family_body2"
                            >
                                Projects
                            </Link>
                            <Link 
                                to="Contact" 
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500}
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-family_body2"
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-6 mb-8">
                            <a 
                                href="https://github.com/yenloned" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-background-300 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 border border-gray-600 transition-all duration-300 group"
                            >
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/rudyyen/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-background-300 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 border border-gray-600 transition-all duration-300 group"
                            >
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                </svg>
                            </a>
                            <a 
                                href="mailto:rudyyen.work@gmail.com"
                                className="w-10 h-10 bg-background-300 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 border border-gray-600 transition-all duration-300 group"
                            >
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>

                        {/* Copyright and Info */}
                        <div className="border-t border-gray-700 pt-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="text-gray-400 font-family_body2">
                                    © {currentYear || new Date().getFullYear()} Rudy Yen. All rights reserved.
                                </div>
                                <div className="text-gray-500 font-family_body2 text-sm">
                                    Last Update: {lastUpdate}
                                </div>
                                <Link 
                                    to="NavBar" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={50} 
                                    duration={500}
                                    className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 font-family_body2 cursor-pointer"
                                >
                                    <span>Back to Top</span>
                                    <svg className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer