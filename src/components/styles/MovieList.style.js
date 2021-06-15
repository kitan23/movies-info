import styled from "styled-components";

export const MovieList = styled.div`
  transition: ease all 0.5s;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10vh;
  grid-column-gap: 1rem;
  padding: 5rem 0.5rem;

  @media only screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 2rem;
    padding: 5rem 3rem;
  }
`;
