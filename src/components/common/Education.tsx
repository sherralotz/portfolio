
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardImage } from "../ui/Card";
import { education } from "../../data/content";
import logo from "../../assets/su_logo.png";
const Education: React.FC = () => {
    return (
        <>
        {/* <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-white">
          Education
        </h2> */}
        <div className="flex justify-center item flex-row">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="dark:bg-white/5 bg-white backdrop-blur-md shadow-md border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
             
              <CardHeader>
              <CardImage className=" ">
                <div className="dark:bg-white rounded-[50px] w-20 p-0.5">
                <img src={logo} alt={"Silliman University logo"} 
                           className="w-20"/>
                </div> 
                </CardImage>
                <div className="flex flex-col flex-wrap space-y-1.5 justify-center">
                <CardTitle className="text-lg dark:text-white text-black">
                  {edu.degree}
                </CardTitle>
                <CardDescription className=" dark:text-gray-400 text-gray-600">
                  {edu.university}
                </CardDescription>
                </div>
               
              </CardHeader>
            </Card>
          ))}
        </div>
        </>
    );
  };
  
  export default Education;