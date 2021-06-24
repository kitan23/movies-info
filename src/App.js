import { useEffect, useState, useContext } from "react";
import Movie from "./components/Movie.js";
import { MovieList } from "./components/styles/MovieList.style";
import { GlobalStyles } from "./components/GlobalStyles.style";
import { AppContainer } from "./components/styles/AppContainer.style";
import ThemeContextProvider from "./contexts/ThemeContext.js";
import { ThemeContext } from "./contexts/ThemeContext.js";
import Nav from "./components/NavBar";

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
      <Nav
        setInput={setInput}
        input={input}
        formSubmit={formSubmit}
        results={results}
      />
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
