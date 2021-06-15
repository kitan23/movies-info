import { useEffect, useState, useContext } from "react";
import Movie from "./components/Movie.js";
import ThemeToggle from "./components/ThemeToggle";
import { MovieList } from "./components/styles/MovieList.style";
import { Navbar } from "./components/styles/Navbar.style";
import { GlobalStyles } from "./components/GlobalStyles.style";
import { AppContainer } from "./components/styles/AppContainer.style";
import ThemeContextProvider from "./contexts/ThemeContext.js";
import { ThemeContext } from "./contexts/ThemeContext.js";

function AppWrapper() {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
}

function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=f08e8f89&s=${query}`
      );
      const data = await res.json();
      const films = data.Search;
      setResults(films);
      films && console.log(films);
    }
    fetchMovie();
  }, [query]);

  const formSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");
  };
  return (
    <AppContainer style={style}>
      <GlobalStyles />
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
      {!query && (
        <h2 style={{ marginLeft: "35%" }}>Search for Movies or TV shows</h2>
      )}
      <MovieList>
        {results &&
          results.map((result, index) => (
            <Movie
              key={index}
              title={result.Title}
              year={result.Year}
              poster={result.Poster}
            />
          ))}
      </MovieList>
    </AppContainer>
  );
}

export default AppWrapper;
