import React, { ReactNode } from "react"; 
import SkillPill from "../ui/SkillPill";
import { 
    Cpu,
    Terminal,
    Code2,
    Zap,
    ScrollText,
  } from "lucide-react";
  
 const skills = [ 
    { skill: "React", logo: <Code2 className="w-4 h-4" /> },
    { skill: "Angular", logo: <Code2 className="w-4 h-4" /> },
    { skill: "Next.js", logo: <Code2 className="w-4 h-4" /> },
    { skill: "Vue.js", logo: <Code2 className="w-4 h-4" /> },
    { skill: "jQuery", logo: <Code2 className="w-4 h-4" /> },
    
    { skill: "JavaScript", logo: <Cpu className="w-4 h-4" /> },
    { skill: "TypeScript", logo: <Terminal className="w-4 h-4" /> },

    { skill: "HTML5", logo: <ScrollText className="w-4 h-4" /> },
    { skill: "CSS", logo: <ScrollText className="w-4 h-4" /> },
    { skill: "SCSS", logo: <ScrollText className="w-4 h-4" /> },
    { skill: "Tailwind CSS", logo: <Zap className="w-4 h-4" /> },
    { skill: "Bootstrap", logo: <Zap className="w-4 h-4" /> },
  ];

interface Skill {
    skill: string;
    logo: ReactNode;
}

const Skills: React.FC = () => {
  return (
    <>
    <div >
      {/* <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-white">
        My Skills
      </h2> */}
      <div className="flex flex-wrap justify-center">
        {skills.map((skill: Skill, index) => (
          <SkillPill key={index} skill={skill.skill} logo={skill.logo} />
        ))}
      </div>
      </div>
    </>
  );
};

export default Skills;
