import ProjectContainer from "./ui/ProjectContainer";

const Project = () => {
  return (
    <div className="w-full h-auto mb-20 text-center lg:mt-28 mt-12" id="projects">
      <h1 className="font-poppins lg:text-[48px] text-[35px] font-[600] lg:mb-16 mb-10"
      data-aos="fade-up" data-aos-duration="700">Projects</h1>
      <ProjectContainer />
    </div>
  );
}

export default Project;
