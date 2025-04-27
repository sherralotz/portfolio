import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { Moon, Sun } from "lucide-react";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const html = document.documentElement;
    const theme = isDarkMode ? "dark" : "light";
    html.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  return (
    <div>
      <Button
        variant="ghost"
        onClick={toggleDarkMode}
        className={"rounded-full p-2 z-20"}
      >
        {isDarkMode ? (
          <div className=" inline-flex">
            <Sun className="w-8 h-8 mt-1 me-1" />
             
          </div>
        ) : (
          <div className=" inline-flex">
            <Moon className="w-8 h-8 mt-1 me-1" />
             
          </div>
        )}
      </Button>
    </div>
  );
};

export default DarkMode;
