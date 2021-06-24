import React from "react";
import { Navbar } from "./styles/Navbar.style";
import ThemeToggle from "./ThemeToggle";

export default function Nav({ setInput, input, results, formSubmit }) {
  return (
    <div>
      <Navbar>
        <div>Movies/TV Shows</div>
        {results && <ThemeToggle />}
        <form onSubmit={(e) => formSubmit(e)}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Find</button>
        </form>
      </Navbar>
    </div>
  );
}
