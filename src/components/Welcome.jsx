/* eslint-disable react/no-unescaped-entities */
import Typewriter from "typewriter-effect";
import { ComputersCanvas } from "./constant";
import bg from '/img/bg.png';
import MagicButton from "./ui/MagicButton";

const Welcome = () => {
    const typewriterOptions = {
        strings: ["I'am Front-End Developer", "I'am Back-End Developer", "I'am UI/UX Design"],
        autoStart: true,
        loop: true,
        delay: 100,
      };

  return (
    <div className="pt-[40px] flex justify-around items-center gap-3 w-full h-[100vh] bg-no-repeat px-20"
    style={{ backgroundImage: `url(${bg})` }} id="home">
      <div className="font-poppins font-[600]" data-aos="fade-up" data-aos-duration="700">
        <h1 className="text-[40px]">Hello, I am Setio Nugraha</h1>
        <div className="text-[35px] text-blue-purple">
          <Typewriter options={typewriterOptions} />
        </div>
        <p className="font-[400] text-[15px] mt-3 mb-1">I'am a Full Stack Developer with experience in Website, and UI/UX Design. Enjoy on my website</p>
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
