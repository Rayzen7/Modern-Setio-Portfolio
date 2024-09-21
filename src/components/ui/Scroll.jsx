import Name from '/img/SetioName.png';

const Scroll = () => {
  return (
    <div className="overflow-hidden">
      <div className='flex animate-scroll-horizontal'>
        <div className='flex'>
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
        </div>  
      </div>
      <div className='flex animate-scroll-horizontal'>
        <div className='flex'>
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
        </div>
      </div>
      <div className='flex animate-scroll-horizontal'>
        <div className='flex'>
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
          <img src={Name} alt="Name" className="w-[700px] h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Scroll;
