import { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll'

const Navbar = () => {
        const [navBar, setNavBar] = useState(false);

        useEffect(() =>{
            window.addEventListener('scroll', changeBackground);
        })
    
        const changeBackground = () => {
            if(window.scrollY >= 80){
                setNavBar(true);
            }else{
                setNavBar(false);
            }
        }
        
    return(
        <>
            <div className={navBar ? "z-50 sticky top-0 py-3.5 hidden items-center shadow justify-center gap-20 text-slate-400 bg-gradient-to-r from-background-100 via-background-200 to-background-100 md:flex":"z-50 sticky top-0 py-3.5 items-center shadow justify-center gap-20 text-slate-400 bg-background-100 hidden md:flex"}>
                <Link activeClass="before:absolute before:bg-green-300 before:h-1 before:w-2 before:translate-x-5 before:bottom-5 before:rounded-full text-slate-50 inline-block align-top pb-2 text-center leading-6 text-white duration-300" to="About" spy={true} smooth={true} offset={50} duration={500} className="font-family_header1 cursor-pointer">About</Link>
                <Link activeClass="before:absolute before:bg-green-300 before:h-1 before:w-2 before:translate-x-9 before:bottom-5 before:rounded-full text-slate-50 inline-block align-top pb-2 text-center leading-6 text-white duration-300" to="Experience" spy={true} smooth={true} offset={50} duration={500} className="font-family_header1 cursor-pointer">Experience</Link>
                <Link activeClass="before:absolute before:bg-green-300 before:h-1 before:w-2 before:translate-x-7 before:bottom-5 before:rounded-full text-slate-50 inline-block align-top pb-2 text-center leading-6 text-white duration-300" to="Project" spy={true} smooth={true} offset={50} duration={500} className="font-family_header1 cursor-pointer">Projects</Link>
                <Link activeClass="before:absolute before:bg-green-300 before:h-1 before:w-2 before:translate-x-7 before:bottom-5 before:rounded-full text-slate-50 inline-block align-top pb-2 text-center leading-6 text-white duration-300" to="Contact" spy={true} smooth={true} offset={50} duration={500} className="font-family_header1 cursor-pointer">Contact</Link>
            </div>
            <Element name="NavBar" />
        </>
    )
}

export default Navbar;