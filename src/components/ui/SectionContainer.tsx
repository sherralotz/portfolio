
import React, { ReactNode } from 'react'; 
interface IntroductionProps { 
    children?: ReactNode;
    variant: 'black' | 'blue' | 'red';
    background?: 'blank';
    title?: string;
    id?: string;
}

const SectionContainer: React.FC<IntroductionProps> = ({ children, variant, background, title, id }) => {
    const variantClasses = {
  black: "bg-gray-100 dark:bg-black", 
  blue: "bg-gray-50 dark:bg-gray-900", 
  red: "bg-red-800 dark:bg-black", 
    };
  


    return (
      <section className={`py-10 sm:py-16 transition-colors duration-500 relative ${variantClasses[variant]}`}>  
      {/* Dots Background */}
      { background !== "blank" ? 
        <div className={`absolute inset-0 transition-colors duration-500 z-0
          bg-[radial-gradient(#000_1px,_transparent_1px)] bg-[size:16px_16px] opacity-10
          dark:bg-[radial-gradient(#e5e7eb_1px,_transparent_1px)] dark:bg-[size:16px_16px] dark:opacity-8
        `} />:""}
       
           {/* <MouseGlow /> */}
      <div className="container mx-auto px-4 relative z-10">
      {title ? 
      <div id={id ?? ""} className="text-3xl accent-font sm:text-4xl font-semibold text-center mb-7 sm:mb-12 dark:text-white text-black">
       <span className='border-l-5 border-[#c40b0b] ps-4'>{title}</span> 
      </div>:<div id={id ?? ""}></div>} 
        {children}
        </div>
      </section>
    );
  };
  
  export default SectionContainer;