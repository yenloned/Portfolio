import { Link } from "react-scroll"

const Footer = () => {
    return (
        <>
            <div className="bg-background-400 flex flex-col px-1 py-6 md:p-24 font-family_body3 text-lg">
                <div className="flex justify-center">Copyright © 2022 Rudy Yen</div>
                <div className="flex justify-center">Last Update: 22 Dec 2022</div>
                <div className="flex justify-between">
                    <div></div>
                    <Link activeClass="text-slate-50 inline-block align-top pb-2 text-center leading-6 text-white duration-300" to="NavBar" spy={true} smooth={true} offset={50} duration={500} className="font-family_header1 cursor-pointer">Back to Top</Link>
                </div>
            </div>
        </>
    )
}

export default Footer