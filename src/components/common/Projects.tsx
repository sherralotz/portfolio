import React from "react";
import ProjectCard from "../ui/ProjectCard";
import SearchMovies from "../../assets/movie-search.png";
import { Code2, Cpu, ScrollText } from "lucide-react";

const projects = [
  {
    title: "Search Movies",
    description:
      "This web application is a basic implementation of a movie search engine, created to practice React development skills. By connecting to the TMDb API, users can query for movies, and the application dynamically renders the retrieved information. The project likely involved working with React components, managing API responses, and presenting data in a user-friendly format.",
    imageUrl: SearchMovies,
    link: "https://sherralotz.github.io/search-movies/", 
    skills: [
      { skill: "React", logo: <Code2 className="w-4 h-4" /> },
      { skill: "JavaScript", logo: <Cpu className="w-4 h-4" /> },
      { skill: "HTML5", logo: <ScrollText className="w-4 h-4" /> },
      { skill: "CSS", logo: <ScrollText className="w-4 h-4" /> },
      { skill: "SCSS", logo: <ScrollText className="w-4 h-4" /> },
    ],
  },
];
const Projects: React.FC = () => {
  return (
    <div id="projects"> 
      <div className="space-y-16 px-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
