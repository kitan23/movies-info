import React from "react";
import Section from "./components/Section";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import { GlobalStyles } from "./components/GlobalStyles.style";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyles />
      <Banner />
      <Section
        section="Trending"
        fetchUrl={requests.fetchTrending}
        isLargeSection={true}
      />
      <Section
        section="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginal}
      />
      <Section section="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Section section="Action" fetchUrl={requests.fetchActionMovie} />
      <Section section="Romance" fetchUrl={requests.fetchRomanceMovie} />
      <Section section="Comedy" fetchUrl={requests.fetchComedyMovie} />
      <Section section="Horror" fetchUrl={requests.fetchHorrorMovie} />
      <Section section="Documentary" fetchUrl={requests.fetchDocumentary} />
      <div
        className="footers"
        style={{
          display: "flex",
          paddingTop: "10vh",
          paddingBottom: "5vh",
          justifyContent: "center",
          alignItems: "center",
          color: "#757575",
        }}
      >
        <div>Design by Kien Tran</div>
      </div>
    </div>
  );
}

export default App;
