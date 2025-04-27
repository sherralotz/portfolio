import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div id="contact">
      {" "}
      <div className="flex flex-row justify-center gap-5 sm:gap-8">
        <a
          href="http://linkedin.com/in/sherrapaltingca"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center dark:text-white text-black hover:text-blue-300 transition-colors duration-300"
        >
          <Linkedin className="w-6 h-6 mr-2" />
          LinkedIn
        </a>
        <span className="dark:text-white text-black">|</span>
        <a
          href="mailto:sherrajayetuble@gmail.com"
          className="inline-flex items-center dark:text-white text-black hover:text-blue-300 transition-colors duration-300"
        >
          <Mail className="w-6 h-6 mr-2" />
          Email
        </a>
        <span className="dark:text-white text-black">|</span>
        <a
          href="https://github.com/sherralotz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center dark:text-white text-black hover:text-blue-300 transition-colors duration-300"
        >
          <Github className="w-6 h-6 mr-2" />
          Github
        </a>
      </div>
    </div>
  );
};

export default Contact;
