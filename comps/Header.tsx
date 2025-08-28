import Image from 'next/image'
import { Typewriter, useTypewriter, Cursor, TypewriterHelper } from 'react-simple-typewriter'
import { Link } from 'react-scroll'
import { useEffect, useState } from 'react'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return(
        <>
            <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-dark opacity-90"></div>
                
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-dark opacity-90"></div>

                <div className={`relative z-10 mx-4 md:mx-auto max-w-6xl text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Main title with gradient effect */}
                    <div className="mt-20">
                        <h1 className="gradient-text font-family_header2 text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in">
                            Rudy Yen
                        </h1>
                        <div className="text-xl md:text-2xl text-gray-300 font-family_body2 max-w-2xl mx-auto leading-relaxed">
                            Full Stack Developer, Software Engineer, Game Developer...
                        </div>
                        {/* Animated greeting */}
                        <div className='mb-8'>
                            <div className='flex justify-center items-center gap-2 mt-1 text-xl md:text-2xl text-green-400 font-jetbrains mb-4'>
                                <div className='text-zinc-300'>&#x3e;&#x3e; </div>
                                <Typewriter 
                                    words={[
                                        'std::cout << "Hello World!";',
                                        'print("Hello World!")',
                                        'console.log("Hello World!")',
                                        'echo "Hello World!";',
                                        'System.out.println("Hello World!");',
                                    ]}
                                    loop={0}
                                    typeSpeed={35}
                                    deleteSpeed={10}
                                    cursor
                                    cursorBlinking={false}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Enhanced terminal mockup */}
                    <div className="glass rounded-xl p-6 md:p-8 max-w-2xl mx-auto mb-8 animate-slide-up">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="text-gray-400 text-sm font-jetbrains">Terminal</div>
                        </div>
                        
                        <div className="font-jetbrains text-sm md:text-base space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">user@user-PC</span>
                                <span className="text-purple-400">MINGW64</span>
                                <span className="text-yellow-400">~/Desktop/rudyyen.info</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-blue-400">$</span>
                                <span className="text-white">npm install rudy-yen-portfolio</span>
                            </div>
                            <div className="text-gray-400 ml-4">added 1 package, and audited 0 packages in 0s</div>
                            <div className="text-gray-400 ml-4">1337 packages are looking for funding</div>
                            <div className="text-gray-400 ml-4">run `npm fund` for details</div>
                            <div className="flex items-center gap-1 ml-4">
                                <span className="text-gray-400">found</span>
                                <span className="text-green-400 font-bold">0</span>
                                <span className="text-gray-400">vulnerabilities</span>
                            </div>
                        </div>
                    </div>

                    {/* Call to action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
                        <Link 
                            activeClass="text-slate-50 duration-200" 
                            to="About" 
                            spy={true} 
                            smooth={true} 
                            offset={50} 
                            duration={500}
                            className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 glow"
                        >
                            <span className="relative z-10">Explore My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                        </Link>
                        
                        <Link 
                            activeClass="text-slate-50 duration-200" 
                            to="Contact" 
                            spy={true} 
                            smooth={true} 
                            offset={50} 
                            duration={500}
                            className="group px-8 py-3 border-2 border-blue-500 rounded-lg font-semibold text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    {/* Scroll indicator */}
                    <div className='flex justify-center animate-bounce-slow'>
                        <Link 
                            activeClass="text-slate-50 duration-200" 
                            to="About" 
                            spy={true} 
                            smooth={true} 
                            offset={50} 
                            duration={500}
                            className="group cursor-pointer"
                        >
                            <div className="w-16 h-16 border-2 border-blue-500 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors duration-300">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth="1.5" 
                                    stroke="currentColor" 
                                    className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;