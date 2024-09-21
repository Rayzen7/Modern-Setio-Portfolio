import About from "../components/About"
import Achievement from "../components/Achievement"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Project from "../components/Project"
import Welcome from "../components/Welcome"

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full">
        <Navbar/>
      </div>
      <Welcome/>
      <About/>
      <Project/>
      <Achievement/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home