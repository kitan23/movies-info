import React from "react";
import { SingleMovie, MovieImage, ReleaseInfo } from "./styles/Movie.style";
import { useState, useEffect } from "react";

function Details({ actors, awards, plot, score, boxoffice }) {
  return (
    <SingleMovie>
      <div>{plot}</div>
      <div>Actors: {actors}</div>
      <div>Awards: {awards}</div>
      <div>Metascore: {score}</div>
      <div>Box Office: {boxoffice}</div>
    </SingleMovie>
  );
}

export default function Movie({ title, poster, year }) {
  const [view, setView] = useState(false);
  const [details, setDetails] = useState({});
  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=f08e8f89&t=${title}`
      );
      const data = await res.json();
      let details = {
        actors: data.Actors,
        awards: data.Awards,
        plot: data.Plot,
        score: data.Metascore,
        boxoffice: data.BoxOffice,
      };
      setDetails(details);
    }
    fetchMovie();
  }, [title]);

  return (
    <SingleMovie>
      <ReleaseInfo>
        <div>{title}</div>
        <span>{year}</span>
      </ReleaseInfo>
      {!view ? (
        <MovieImage src={poster} alt="image n/a"></MovieImage>
      ) : (
        <Details
          actors={details.actors}
          plot={details.plot}
          awards={details.awards}
          score={details.score}
          boxoffice={details.boxoffice}
          A
        />
      )}
      <button onClick={() => setView(!view)}>View details</button>
    </SingleMovie>
  );
}
