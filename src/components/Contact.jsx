import { EarthCanvas } from "./constant";
import MagicButton from "./ui/MagicButton";
import './CSS/style.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const name = e.target[0].value; 
    const message = e.target[1].value; 
    const encodedMessage = encodeURIComponent(`Name: ${name}\nMessage: ${message}`);
    const whatsappURL = `https://wa.me/6281219538787?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="w-full h-[100vh] pt-10" id="contact" data-aos="fade-up" data-aos-duration="700">
      <h1 className="text-center font-poppins font-[600] lg:text-[45px] text-[35px]">Contact</h1>
      <div className="flex justify-center items-center mt-16 gap-24">
        <div className="earth">
          <EarthCanvas />
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center lg:items-start gap-8">
            <input
              type="text"
              placeholder="Name"
              required
              className="lg:w-[500px] w-[300px] h-[50px] pl-5 rounded-md bg-transparent"
              style={{ border: "2px solid rgba(255, 255, 255, 0.125)" }}
            />
            <textarea
              placeholder="Message"
              required
              className="lg:w-[500px] w-[300px] h-[230px] bg-transparent rounded-md pl-5 pt-3"
              style={{ border: "2px solid rgba(255, 255, 255, 0.125)" }}
            ></textarea>
            <button type="submit">
              <MagicButton title="Send" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
