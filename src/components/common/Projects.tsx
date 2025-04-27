import React from "react";
import ProjectCard from "../ui/ProjectCard";

const projectPlaceholder =
  "https://placehold.co/600x400?text=Project+Image&font=Montserrat";
const projects = [
  {
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce website with user authentication, product browsing, shopping cart, and checkout functionality.",
    imageUrl: projectPlaceholder,
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "A dashboard that displays data from various sources using interactive charts and graphs.  Built with React and a charting library.",
    imageUrl: projectPlaceholder,
  },
  {
    title: "Mobile Task Manager",
    description:
      "A mobile app for managing tasks and to-do lists, with features like reminders, categories, and progress tracking. Built with React Native.",
    imageUrl: projectPlaceholder,
  },
];
const Projects: React.FC = () => {
  return (
    <div id="projects">
      {/* <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-white">
        Projects
      </h2> */}
      <div className="space-y-16 px-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
