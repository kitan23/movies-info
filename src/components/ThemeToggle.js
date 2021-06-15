import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AllButton } from "./styles/Movie.style";

export default function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <AllButton onClick={toggleTheme}>Toggle theme</AllButton>
    </div>
  );
}
