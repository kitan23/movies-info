import React, { useState, useEffect } from "react";
import axios from "../axios";
import { Section, SectionTitle, Row, Poster } from "./styles/Section.style.js";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Sections({ section, fetchUrl, isLargeSection }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await axios.get(fetchUrl);
      setMovies(data.data.results);
    };
    fetchMovie();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <Section className="section">
      <SectionTitle>{section}</SectionTitle>
      <Row className="section_posters">
        {movies.map((movie) => (
          <Poster
            key={movie.id}
            onClick={() => handleClick(movie)}
            isLargeSection={isLargeSection}
            src={`${base_url}${
              isLargeSection ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </Row>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </Section>
  );
}

export default Sections;
