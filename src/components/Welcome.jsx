/* eslint-disable react/no-unescaped-entities */
import Typewriter from "typewriter-effect";
import { ComputersCanvas } from "./constant";
import bg from '/img/bg.png';
import MagicButton from "./ui/MagicButton";
import './CSS/style.css'

const Welcome = () => {
    const typewriterOptions = {
        strings: ["I'am Front-End Developer", "I'am Back-End Developer", "I'am UI/UX Designer"],
        autoStart: true,
        loop: true,
        delay: 100,
      };

  return (
    <div className="lg:pt-[40px] pt-0 lg:mt-0 -mt-6 flex justify-around items-center gap-3 w-full h-[100vh] bg-no-repeat lg:px-20 px-8 lg:flex-row flex-col-reverse"
    style={{ backgroundImage: `url(${bg})` }} id="home">
      <div className="font-poppins font-[600] lg:mt-0 mt-[-150px]" data-aos="fade-up" data-aos-duration="700">
        <h1 className="lg:text-[40px] text-[30px] lg:text-start text-center">Hello, I am <br /> Setio Nugraha</h1>
        <div className="lg:text-[35px] text-[21px] lg:text-start text-center text-blue-purple lg:mt-0 mt-3">
          <Typewriter options={typewriterOptions} />
        </div>
        <p className="font-[400] lg:text-[15px] text-[13px] mt-3 lg:mb-1 mb-16 lg:text-start text-center lg:w-full w-[280px]">I'am a Full Stack Developer with experience in Website, and UI/UX Design. Enjoy on my website</p>
        <a href="#about"><MagicButton
        title="Get Started"/></a>
      </div>
        <div data-aos="fade-up" data-aos-duration="700">
          <ComputersCanvas/>
        </div>
    </div>
  );
};

export default Welcome;
