import { projectsData } from "@/lib/data";
import Section from "../ui/Section";
import Project from "../ui/Project";

const Projects = () => {
  return (
    <Section id="projects" title="Projects" className="min-h-screen">
      <div>
        {projectsData &&
          projectsData.map((project, index) => (
            <Project key={index} project={project} />
          ))}
      </div>
    </Section>
  );
};

export default Projects;
