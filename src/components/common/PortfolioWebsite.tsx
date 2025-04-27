 
import DarkMode from "./DarkMode";
import Introduction from "./Introduction";
import SectionContainer from "../ui/SectionContainer";
import Skills from "./Skills";
import WorkExperience from "./Experience";
import Education from "./Education";
// import Projects from "./Projects";
import Contact from "./Contact";
import Header from "./Header";
 
const PortfolioWebsite = () => { 
  return (
    <div className="min-h-screen dark:bg-[#0f0f0f] bg-white text-gray-100 font-sans transition-colors duration-500 w-full">
     <Header/>
      
      {/* Dark Mode Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <DarkMode />
      </div>

      {/* --- Section 1: Introduction --- */}
      <Introduction />

      {/* --- Section 2: Skills --- */}

      <SectionContainer variant={"black"} title={'My Skills'}>
        <Skills/>
      </SectionContainer>

      {/* --- Section 3: Work Experience --- */}
      <SectionContainer variant={"blue"} title={'Experience'}>
      <WorkExperience/>
      </SectionContainer>

      {/* --- Section 4: Education --- */}
      <SectionContainer variant={"black"} title={'Education'}>
        <Education/>
      </SectionContainer>

      {/* --- Section 5: Projects --- */}
      {/* <SectionContainer variant={"blue"} title={'Projects'}>
        <Projects/>
      </SectionContainer> */}

      {/* --- Section 6: Contact --- */}
      <SectionContainer variant={"black"} background={'blank'} >
      <Contact/>
      </SectionContainer>
    </div>
  );
};

export default PortfolioWebsite;
