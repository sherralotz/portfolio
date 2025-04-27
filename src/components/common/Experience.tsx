import React from "react";
import TimelineItem from "../ui/TimelineItem";
import { workExperience } from "../../data/content";

const Experience: React.FC = () => {
  return (
    <div>
      {/* <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-white">
        Experience
      </h2> */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 dark:bg-gray-700 bg-gray-300"></div>
        <div className="space-y-12">
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
    </div>
  );
};

export default Experience;
