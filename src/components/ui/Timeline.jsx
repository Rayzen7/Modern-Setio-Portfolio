import { educationTimeline } from "../data/Education";
import Circle from "./Circle";

const Timeline = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100">
      <h1 className="text-[40px] font-bold mb-8 text-white">Education</h1>
      <div className="relative w-2/3 mt-10">
        <div className="absolute h-full border-l-2 border-secondary left-1/2 transform -translate-x-1/2"></div>

        {educationTimeline.map((item, index) => (
          <div key={index} className="flex items-center w-full mb-20">
            {/* right and left */}
            {index % 2 === 0 ? (
              <>
                <div className="w-1/2 text-right pr-12 pt-5" data-aos="fade-right" data-aos-duration="700">
                  <h2 className="text-[17px] font-poppins font-[600] mt-2">{item.year}</h2>
                  <p className="text-[18px] font-poppins font-[500]">{item.title}</p>
                  <p className="text-secondary pt-1 font-poppins text-[14px]">{item.description}</p>
                </div>
                {/* Center Circle */}
                <Circle className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl left-1/2 transform -translate-x-1/2">
                    {index + 1}
                </Circle>
                <div className="w-1/2"></div>
              </>
            ) : (
              <>
                <div className="w-1/2"></div>
                {/* Center Circle */}
                <Circle className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl left-1/2 transform -translate-x-1/2">
                    {index + 1}
                </Circle>
                <div className="w-1/2 text-left pl-12 pt-5" data-aos="fade-left" data-aos-duration="700">
                  <h2 className="text-[17px] font-poppins font-[600] mt-2">{item.year}</h2>
                  <p className="text-[18px] font-poppins font-[500]">{item.title}</p>
                  <p className="text-secondary pt-1 font-poppins text-[14px]">{item.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
