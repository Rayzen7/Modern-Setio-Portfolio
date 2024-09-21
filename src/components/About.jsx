import Scroll from './ui/Scroll';
import Description from './ui/Description';
import setio from '/img/Setio.png';
import Tilt from 'react-parallax-tilt';
import Timeline from './ui/Timeline';
import ScrollWeb from './ui/ScrollWeb';


const About = () => {
  return (
    <div className="h-auto overflow-hidden" id="about">
      <h1 className='text-center font-poppins lg:text-[50px] text-[40px] font-[600] lg:mb-0 mb-10'
      data-aos="fade-up" data-aos-duration="700">About Me</h1>
      <div className='absolute block mx-auto lg:mt-52 mt-28 overflow-hidden'
      data-aos="fade-up" data-aos-duration="700">
        <Scroll/>
      </div>
      <img src={setio} alt="Setio" className='lg:w-[500px] w-[300px] h-auto block mx-auto relative z-10 mt-2' 
      data-aos="fade-up" data-aos-duration="700"/>
      <Tilt className='flex justify-center items-center lg:-mt-[290px] -mt-[220px] relative z-20'>
        <Description desc='Hello, my name is Setio Nugraha. I study at SMK Negeri 26 Jakarta. I majored in Sistem Informasi Jaringan dan Aplikasi. I am a Fullstack Developer and also a UI/UX Designer. Nice to meet you' />
      </Tilt>
      <div className='mt-16' data-aos="fade-up" data-aos-duration="700">
        <Timeline/>
      </div>
      <div className='lg:scale-[300%] scale-[190%] lg:mt-[120px] mt-[100px]'>
        <ScrollWeb/>
      </div>
    </div>
  );
}

export default About;