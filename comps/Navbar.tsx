import { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll'

const Navbar = () => {
    const [navBar, setNavBar] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        setIsVisible(true);
        
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavBar(true);
        }else{
            setNavBar(false);
        }
    }

    const navItems = [
        { name: "About", to: "About" },
        { name: "Experience", to: "Experience" },
        { name: "Projects", to: "Project" },
        { name: "Contact", to: "Contact" }
    ];
        
    return(
        <>
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                navBar 
                    ? "glass backdrop-blur-md border-b border-gray-700/50" 
                    : "bg-transparent"
            } animated-bg`}>
                {/* Dynamic Background Elements for Navbar */}
                <div className="gradient-mesh"></div>
                <div className="floating-orbs">
                    <div className="orb"></div>
                    <div className="orb"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className={`flex items-center justify-between py-4 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}>
                        {/* Logo/Brand */}
                        <div className="flex items-center">
                            <Link 
                                to="About" 
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500}
                                className="group cursor-pointer"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-sm">RY</span>
                                    </div>
                                    <span className="font-family_header2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        Rudy Yen
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    activeClass="text-blue-400 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:animate-pulse"
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="group relative font-family_header2 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer py-2"
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
                                    {item.name}
                                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button className="p-2 rounded-lg bg-background-300/50 border border-gray-600 hover:border-gray-500 transition-colors">
                                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Element name="NavBar" />
        </>
    )
}

export default Navbar;