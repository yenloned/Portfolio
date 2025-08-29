import { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll'

const Navbar = () => {
    const [navBar, setNavBar] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Set initial state based on current scroll position
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY >= 80) {
                setNavBar(true);
            } else {
                setNavBar(false);
            }
        };

        // Call once to set initial state
        handleScroll();
        
        // Add event listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        setIsVisible(true);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { name: "About", to: "About" },
        { name: "Experience", to: "Experience" },
        { name: "Projects", to: "Project" },
        { name: "Contact", to: "Contact" }
    ];

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleNavClick = (sectionName: string) => {
        closeMobileMenu();
        
        // Find the Element component by its name attribute
        const element = document.querySelector(`[name="${sectionName}"]`);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            // Fallback: try to find by id
            const elementById = document.getElementById(sectionName);
            if (elementById) {
                elementById.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };
        
    return(
        <>
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                navBar 
                    ? "bg-background-400/80 backdrop-blur-sm border-b border-gray-700/30" 
                    : "bg-transparent"
            }`}>
                {/* Dynamic Background Elements for Navbar - only show when not scrolled */}
                {!navBar && (
                    <>
                        <div className="gradient-mesh opacity-30"></div>
                        <div className="floating-orbs opacity-20">
                            <div className="orb"></div>
                            <div className="orb"></div>
                        </div>
                    </>
                )}
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className={`flex items-center justify-between py-4 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}>
                        {/* Logo/Brand */}
                        <div className="flex items-center">
                            <button 
                                onClick={() => handleNavClick('About')}
                                className="group cursor-pointer"
                            >
                                <div className="flex items-center gap-2">
                                    <div className={`w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                                        navBar ? 'opacity-80' : 'opacity-100'
                                    }`}>
                                        <span className="text-white font-bold text-sm">RY</span>
                                    </div>
                                    <span className={`font-family_header2 text-xl font-bold transition-colors ${
                                        navBar 
                                            ? 'text-gray-300 group-hover:text-gray-200' 
                                            : 'text-white group-hover:text-blue-400'
                                    }`}>
                                        Rudy Yen
                                    </span>
                                </div>
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navItems.map((item, index) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.to)}
                                    className={`group relative font-family_header2 transition-colors duration-300 cursor-pointer py-2 ${
                                        navBar 
                                            ? 'text-gray-400 hover:text-gray-200' 
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
                                    {item.name}
                                    <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ${
                                        navBar ? 'opacity-60' : 'opacity-100'
                                    }`}></div>
                                </button>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg bg-background-300/50 border border-gray-600 hover:border-gray-500 transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu - Moved outside the main container */}
                <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}>
                    <div className="glass rounded-2xl mx-4 mb-4 border border-gray-600/30 shadow-xl">
                        <nav className="flex flex-col p-4">
                            {navItems.map((item, index) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.to)}
                                    className={`group relative font-family_header2 transition-all duration-300 cursor-pointer py-3 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-background-300/50 ${
                                        navBar ? 'hover:bg-background-400/50' : 'hover:bg-background-300/50'
                                    }`}
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        {item.name}
                                    </div>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <Element name="NavBar" />
        </>
    )
}

export default Navbar;