/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Projects } from "../data/Project.js";
import MagicButton from "./MagicButton.jsx";
import Tilt from 'react-parallax-tilt';

const ProjectContainer = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center gap-16 items-center lg:flex-wrap flex-nowrap lg:flex-row flex-col"
      data-aos="fade-up" data-aos-duration="700">
        {Projects.map((item, i) => (
          <Tilt
            key={i}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={300}
            onMouseEnter={() => setHoveredId(i)} 
            onMouseLeave={() => setHoveredId(null)} 
          >
            <div className="bg-transparent lg:w-[450px] w-[310px] h-auto lg:p-8 px-8 py-12 rounded-lg"
                 style={{border: "2px solid rgba(255, 255, 255, 0.125)"}}>
              <img src={item.head} alt="" className="rounded-xl mb-9"/>
              <h1 className="font-poppins font-[600] lg:text-[25px] text-[18px]">{item.title}</h1>
              <p className='font-poppins text-secondary pt-2'>{item.category}</p>
              <p className="font-poppins font-[400] lg:text-[15px] text-[13px] mt-3 text-secondary lg:mb-0 mb-12">{item.desc}</p>
              <a href={item.link} target="_blank"><MagicButton title='Check Live Sites'/></a>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default ProjectContainer;
