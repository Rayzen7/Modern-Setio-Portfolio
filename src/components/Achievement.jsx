import { achievement } from "./data/Achievement";
import './CSS/style.css'

const Achievement = () => {
  return (
    <div className="lg:h-[110vh] h-[85vh] w-full pt-10 lg:px-10 px-3" id="achievement">
      <h1 className="text-center lg:text-[40px] text-[34px] font-poppins font-[600]"
      data-aos="fade-up" data-aos-duration="700">Achievement</h1>
      <div className="overflow-x-auto lg:mr-0 mr-4 bar" data-aos="fade-up" data-aos-duration="700">
        <div className="flex lg:gap-12 gap-7 justify-start items-center mt-10 whitespace-nowrap lg:mx-0 mx-5">
          {achievement.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center lg:p-6 px-6 py-12 rounded-xl lg:w-[400px] w-[300px] h-auto flex-shrink-0"
              style={{ border: "2px solid rgba(255, 255, 255, 0.125)" }}
            >
              <img src={item.img} alt={item.title} className="lg:w-[350px] w-[300px] h-auto rounded-md mb-6" />
              <h1 className="text-center lg:text-[20px] text-[17px] font-poppins font-[600] whitespace-normal">{item.title}</h1>
              <p className="pt-3 lg:text-[15px] text-[13px] font-poppins font-[400] text-center whitespace-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
    