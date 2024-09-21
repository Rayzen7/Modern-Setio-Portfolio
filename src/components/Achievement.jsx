import { achievement } from "./data/Achievement";
import './CSS/style.css'

const Achievement = () => {
  return (
    <div className="h-[110vh] w-full pt-10 px-10" id="achievement">
      <h1 className="text-center text-[40px] font-poppins font-[600]"
      data-aos="fade-up" data-aos-duration="700">Achievement</h1>
      <div className="overflow-x-auto bar" data-aos="fade-up" data-aos-duration="700">
        <div className="flex gap-12 justify-start items-center mt-10 whitespace-nowrap ">
          {achievement.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center p-6 rounded-xl w-[400px] h-auto flex-shrink-0"
              style={{ border: "2px solid rgba(255, 255, 255, 0.125)" }}
            >
              <img src={item.img} alt={item.title} className="w-[350px] h-auto rounded-md mb-6" />
              <h1 className="text-center text-[20px] font-poppins font-[600] whitespace-normal">{item.title}</h1>
              <p className="pt-3 text-[15px] font-poppins font-[400] text-center whitespace-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
    