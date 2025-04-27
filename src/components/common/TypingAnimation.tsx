import { useEffect, useState } from "react";

interface TypingAnimationProps {
  texts: string[];
}

export default function TypingAnimation({ texts }: TypingAnimationProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    function type() {
      if (isDeleting) {
        setDisplayedText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setDisplayedText((prev) => currentText.substring(0, prev.length + 1));
      }
    }

    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      type();

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000); // pause before deleting
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      const cursor = document.getElementById("cursor");
      if (cursor) {
        cursor.style.visibility = cursor.style.visibility === "visible" ? "hidden" : "visible";
      }
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div>
      <span id="typing-text">{displayedText}</span>
      <span id="cursor">|</span>
    </div>
  );
}
