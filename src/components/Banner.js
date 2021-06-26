import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "../axios";
import { BannerStyle, BannerContent } from "./styles/Banner.style";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      const result =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ];
      setMovie(result);
    }
    fetchMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <BannerStyle
      // style={{
      //   backgroundSize: "cover",
      //   backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      //   backgroundPosition: "center center",
      // }}
      backgroundImage={`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}
    >
      <BannerContent>
        <div className="banner_title">
          {movie?.title || movie?.name || movie?.original}
        </div>
        <h3 className="banner_overview">{truncate(movie?.overview, 180)}</h3>
        <div className="banner_buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
      </BannerContent>
      <div className="banner_fadeBottom" />
    </BannerStyle>
  );
}

export default Banner;
