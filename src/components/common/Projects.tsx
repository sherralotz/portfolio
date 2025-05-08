import React from "react";
import ProjectCard from "../ui/ProjectCard";
import SearchMovies from "../../assets/movie-search.png";
import TravelPlanner from "../../assets/travel-planner.png";
import BookTracker from "../../assets/book-tracker.png"
import { Code2, Cpu, ScrollText, Zap, Database } from "lucide-react";

const projects = [
  {
    title: "Travel Planner",
    description: 
    `This project emerged from my own need to simplify travel planning, which typically involved a combination of Sheets and Notes. 
    Using Vue.js, I created a dedicated application to manage all trip details in one place, serving as a practical exercise in the framework.`,
    imageUrl: TravelPlanner,
    link: "https://sherralotz.github.io/travel-planner/", 
    skills: [
      { skill: "Vue.js", logo: <Code2 className="w-4 h-4" /> },
      { skill: "JavaScript", logo: <Cpu className="w-4 h-4" /> },
      { skill: "HTML5", logo: <ScrollText className="w-4 h-4" /> },
      { skill: "CSS", logo: <ScrollText className="w-4 h-4" /> }, 
      { skill: "Tailwind CSS", logo: <Zap className="w-4 h-4" /> },
      { skill: "Firebase", logo: <Database className="w-4 h-4" /> }
    ],
  },
  {
    title: "Book Tracker",
    description: 
    `Inspired by Letterboxd but for book lovers, this app provides a platform to manage your reading list and write your reviews. 
    Leveraging the Google Books and Open Library APIs, it offers a robust search and book information experience. 
    My favorite feature is that you can export your review so you can share it on social media.`,
    imageUrl: BookTracker,
    link: "https://sherralotz.github.io/booktracker/", 
    skills: [
      { skill: "React", logo: <Code2 className="w-4 h-4" /> },
      { skill: "JavaScript", logo: <Cpu className="w-4 h-4" /> },
      { skill: "HTML5", logo: <ScrollText className="w-4 h-4" /> },
      { skill: "CSS", logo: <ScrollText className="w-4 h-4" /> },
      { skill: "SCSS", logo: <ScrollText className="w-4 h-4" /> },
      { skill: "Tailwind CSS", logo: <Zap className="w-4 h-4" /> },
      { skill: "Firebase", logo: <Database className="w-4 h-4" /> }
    ],
  },
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
    <div > 
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
