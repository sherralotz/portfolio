import React from "react";
import TimelineItem from "../ui/TimelineItem";
import { workExperience } from "../../data/content";

const Experience: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Timeline and Dots Container (No overflow-hidden) */}
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 dark:bg-gray-700 bg-gray-300 z-10"></div>
      <div className="absolute top-0 bottom-0 w-full z-0 flex flex-col items-center pointer-events-none">
         
      </div>

      {/* Timeline Items Container (overflow-hidden) */}
      <div className="relative space-y-12 z-10">
        {workExperience.map((job, index) => (
          <TimelineItem
            key={index}
            title={job.title}
            subtitle={job.subtitle}
            description={job.description}
            isLeft={job.isLeft}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
