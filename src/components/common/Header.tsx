import React from "react";
import Button from "../ui/Button";
import DotsBackground from "../ui/DotsBackground";

const Header: React.FC = () => {
    return (
        <div className=" transition-colors duration-500 relative items-center"> 
          <DotsBackground/>
          <div className="pt-6.5 ps-5 sm:ps-10 relative z-10 text-sm sm:text-lg">
            <a href="/#skills"><Button variant="ghost" size="custom" className="px-2 py-2 sm:px-6 sm:py-3">Skills</Button></a>
            <a href="/#experience"><Button variant="ghost" size="custom" className="px-2 py-2 sm:px-6 sm:py-3">Experience</Button></a>
            {/* <a href="/#projects"><Button variant="ghost" size="custom" className="px-2 py-2 sm:px-6 sm:py-3">Projects</Button></a> */}
            <a href="/#contact"><Button variant="ghost" size="custom" className="px-2  y-2 sm:px-6 sm:py-3 ">Contact</Button></a>
        </div>
        </div>
    );
  };
  
  export default Header;