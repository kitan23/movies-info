import { useEffect, useState } from "react";
import Movie from "./components/Movie.js";
import { MovieList } from "./components/styles/MovieList.style";
import { Navbar } from "./components/styles/Navbar.style";
import { GlobalStyles } from "./components/GlobalStyles.style";
import { AppContainer } from "./components/styles/AppContainer.style";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

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
    <AppContainer>
      <GlobalStyles />
      <Navbar>
        <div>Movies/TV Shows</div>
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

export default App;
