import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillPillProps {
  skill: string;
  logo: React.ReactNode;
}

const SkillPill: React.FC<SkillPillProps> = ({ skill, logo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.9
        ,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay: 0.2,
        },
      }}
      className={
        `inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white dark:bg-white/10 dark:text-white text-black 
        sm:text-sm text-xs font-medium backdrop-blur-md shadow-md mr-2 mb-2 transition-all duration-300 hover:bg-white/20 hover:scale-105 
        border border-white/10`
      }
    >
      {logo}
      <span className="ml-2">{skill}</span>
    </motion.div>
  );
};

export default SkillPill;
