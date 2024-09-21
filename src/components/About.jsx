import Scroll from './ui/Scroll';
import Description from './ui/Description';
import setio from '/img/Setio.png';
import Tilt from 'react-parallax-tilt';
import Timeline from './ui/Timeline';
import ScrollWeb from './ui/ScrollWeb';


const About = () => {
  return (
    <div className="h-auto overflow-hidden" id="about">
      <h1 className='text-center font-poppins text-[50px] font-[600]'
      data-aos="fade-up" data-aos-duration="700">About Me</h1>
      <div className='absolute block mx-auto mt-52 overflow-hidden'
      data-aos="fade-up" data-aos-duration="700">
        <Scroll/>
      </div>
      <img src={setio} alt="Setio" className='w-[500px] h-auto block mx-auto relative z-10 mt-2' 
      data-aos="fade-up" data-aos-duration="700"/>
      <Tilt className='flex justify-center items-center -mt-[290px] relative z-20'>
        <Description desc='Hello, my name is Setio Nugraha. I study at SMK Negeri 26 Jakarta. I majored in Sistem Informasi Jaringan dan Aplikasi. I am a Fullstack Developer and also a UI/UX Designer. Nice to meet you' />
      </Tilt>
      <div className='mt-16' data-aos="fade-up" data-aos-duration="700">
        <Timeline/>
      </div>
      <div className='scale-[450%] mt-[120px]'>
        <ScrollWeb/>
      </div>
    </div>
  );
}

export default About;