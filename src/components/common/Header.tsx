import React, { useState } from "react";
import Button from "../ui/Button";
import DotsBackground from "../ui/DotsBackground";
import { Menu, X } from "lucide-react"; // Import Menu (hamburger) and X (close) icons

const headerItems = [
  { label: "Skills", link: "#skills" },
  { label: "Experience", link: "#experience" },
  { label: "Education", link: "#education" },
  { label: "Projects", link: "#projects" },
  { label: "Contact", link: "#contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility
  const handleScroll = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    link: string
  ) => {
    e.preventDefault(); // Prevent page refresh
    const targetElement = document.querySelector(link); // Find the section by id

    if (targetElement) {
      const topOffset = 50;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - topOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="transition-colors duration-500 relative items-center">
      <DotsBackground />
      <div className="pt-6.5 ps-5 sm:ps-10 relative z-30 lg:text-lg">
        {/* Hamburger Menu Icon (on small screens) */}
        <div className="sm:hidden flex items-center justify-between mt-2">
          <Button 
            variant="ghost"
            size="custom"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white z-20"
          >
            {isMenuOpen ? <X /> : <Menu />}{" "}
            {/* Use X for close, Menu for hamburger */}
          </Button>
        </div>

        {/* Header Items Medium screens and up */}
        <div
          className={`flex flex-col sm:flex-row sm:space-x-1 md:space-x-4 hidden sm:block`}
        >
          {headerItems.map((item, i: number) => (
            <Button
              key={`header-${i}`}
              onClick={(e) => handleScroll(e, item.link)}
              variant="ghost"
              size="custom"
              className="px-2 py-2 sm:px-6 sm:py-3 text-white"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Vertical Menu on Small Screens (visible when isMenuOpen is true) */}
      <div
        className={`sm:hidden absolute top-0 left-0 w-full bg-black text-white p-4 space-y-4 z-20 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {headerItems.map((item, i: number) => (
          <Button
            key={`vertical-header-${i}`}
            onClick={(e) => handleScroll(e, item.link)}
            variant="ghost"
            size="custom"
            className="w-full px-6 py-3 text-left"
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Header;
