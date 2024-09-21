import ProjectContainer from "./ui/ProjectContainer";

const Project = () => {
  return (
    <div className="w-full h-auto mb-20 text-center mt-28" id="projects">
      <h1 className="font-poppins text-[48px] font-[600] mb-16"
      data-aos="fade-up" data-aos-duration="700">Projects</h1>
      <ProjectContainer />
    </div>
  );
}

export default Project;
