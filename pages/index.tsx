import Navbar from '../comps/Navbar'
import Header from '../comps/Header'
import About from '../comps/About'
import Experience from '../comps/Experience'
import Project from '../comps/Project'
import Contact from '../comps/Contact'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <>
      <div className="bg-background-100">
        <Navbar/>
        <Header/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}
