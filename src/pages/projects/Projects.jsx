import { Wrapper } from "../../shared/wrapper/Wrapper";
import Card from "../../shared/card/Card";
import { projectData } from "../../config/projectData";

const Projects = () => {
  return (
    <Wrapper>
      <section className="px-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Completed Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projectData.map((project, i) => (
            <Card key={i} {...project}/>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Projects;
