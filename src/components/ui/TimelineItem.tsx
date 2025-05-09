import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  description: string[];
  isLeft: boolean;
  index: number;
}
const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  description,
  isLeft,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const delay = index * 0.2; // Adjust delay as needed

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : isLeft ? -50 : 50,
        transition: { duration: 0.6, delay },
      }}
      className={
        "flex w-full relative " +
        (isLeft ? "justify-end md:justify-start" : "md:justify-end")
      }
    >
      <div
        className={
          "relative p-4 rounded-lg dark:bg-[#1B212D] bg-white shadow-md w-full md:w-1/2 dark:text-white text-black " +
          (isLeft ? "md:mr-8 text-right" : "md:ml-8")
        }
      >
        {/* Red Dot */}
        <div
          className={`absolute w-4 h-4 rounded-full bg-red-700 shadow-lg top-1/2 -translate-y-1/2 z-20 ${
            isLeft ? "right-[-10px]" : "left-[-10px]"
          } md:${isLeft ? "right-[-20px]" : "left-[-20px]"} `}
        />

        <h3 className={`text-lg font-semibold text-left sm:text-right `}>
          {title}
        </h3>
        <p className="text-xs dark:text-gray-400 text-gray-600 mb-2 text-left sm:text-right">
          {subtitle}
        </p>
        <ul className="list-disc pl-5 space-y-1">
          {description.map((point, idx) => (
            <li key={idx} className={`text-sm ${isLeft ? "text-left" : ""}`}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
