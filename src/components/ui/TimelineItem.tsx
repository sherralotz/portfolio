import React, { useRef } from 'react';
       import { motion, useInView } from 'framer-motion'; 

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
           const delay = index * 0.2;

           return (
               <motion.div
                   ref={ref}
                   initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                   animate={{
                       opacity: isInView ? 1 : 0,
                       x: isInView ? 0 : isLeft ? -50 : 50,
                       transition: { duration: 0.6, delay },
                   }}
                   className={'flex w-full ' + (isLeft ? 'justify-end md:justify-start' : 'md:justify-end')}
               >
                   <div
                       className={'relative p-4 rounded-lg bg-white/5 backdrop-blur-md shadow-md w-full md:w-1/2 dark:text-white text-black ' + (isLeft ? 'md:mr-8 text-right' : 'md:ml-8')}
                   >
                       <h3 className={`text-lg font-semibold text-left sm:text-right `}>{title}</h3>
                       <p className="text-xs  dark:text-gray-400 text-gray-600 mb-2 text-left sm:text-right">{subtitle}</p>
                       <ul className="list-disc pl-5 space-y-1">
                           {description.map((point, idx) => (
                               <li key={idx} className={`text-sm ${isLeft ? 'text-left':''}`}>
                                   {point}
                               </li>
                           ))}
                       </ul>
                       <div
                           className={'absolute w-4 h-4 rounded-full bg-red-700 ' + (isLeft ? '-left-2 top-1/2 -translate-y-1/2' : '-right-2 top-1/2 -translate-y-1/2') + ' shadow-lg'}
                       />
                   </div>
               </motion.div>
           );
       };

       export default TimelineItem;