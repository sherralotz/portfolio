import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SkillPill from "./SkillPill"; 

interface Skill {
  skill: string;
  logo: ReactNode;
}
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  skills: Array<Skill>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  skills,
  link
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: 0,
        transition: { duration: 0.5 },
      }}
      className="flex flex-col md:flex-row items-center gap-8"
    >
      <div className="w-full md:w-1/2">
      <a href={link} target="_blank">
        <motion.img
          loading="lazy"
          src={imageUrl}
          alt={title}
          className="rounded-lg shadow-lg w-full aspect-video object-cover hover:scale-[1.01] hover:shadow-lg"
          initial={{ opacity: 0 }} // Initially invisible
          animate={{ opacity: isInView ? 1 : 0 }} // Fade in when in view
          transition={{ duration: 0.5 }} // Match the duration of the parent
        /></a>
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold dark:hover:text-blue-100 hover:text-gray-800 dark:text-white text-black mb-2">
          <a href={link} target="_blank">{title}</a>
        </h3>
        <p className=" dark:text-gray-400 text-gray-600 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap justify-start mt-3">
          {skills.map((skill: Skill, index) => (
            <SkillPill key={index} skill={skill.skill} logo={skill.logo} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
