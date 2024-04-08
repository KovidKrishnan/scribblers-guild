import React, { useState, useEffect } from "react";

const Typewriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, text, speed]);

  return <h1>{displayText}</h1>;
};

export default Typewriter;
