import React, { useRef } from 'react';
       import { motion, useInView } from 'framer-motion';
       // import { cn } from 'class-variance-authority';  // Remove this

       interface ProjectCardProps {
           title: string;
           description: string;
           imageUrl: string;
       }

       const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
           const ref = useRef(null);
           const isInView = useInView(ref, { once: true });
           return (
               <motion.div
                   ref={ref}
                   initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: isInView ? 1 : 0, y: 0, transition: { duration: 0.5 } }}
                   className="flex flex-col md:flex-row items-center gap-8"
               >
                   <div className="w-full md:w-1/2">
                       <img
                           src={imageUrl}
                           alt={title}
                           className="rounded-lg shadow-lg w-full aspect-video object-cover"
                       />
                   </div>
                   <div className="w-full md:w-1/2">
                       <h3 className="text-2xl font-semibold dark:text-white text-black mb-2">{title}</h3>
                       <p className=" dark:text-gray-400 text-gray-600 leading-relaxed">{description}</p>
                   </div>
               </motion.div>
           );
       };

       export default ProjectCard;