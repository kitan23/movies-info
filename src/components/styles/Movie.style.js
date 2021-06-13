import styled from "styled-components";

export const SingleMovie = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  button {
    margin: 1rem 0;
    padding: 0.5rem;
    border: 3px solid #00b4cc;
    background-color: #00b4cc;
    font-weight: 600;
    color: #ffffff;
    border-radius: 10px;
  }
`;

export const MovieImage = styled.img`
  /* height: 40vh;
  max-width: 30vh; */
  max-width: 12rem;
  background-size: cover;
  object-fit: cover;
  border-radius: 10px;
  transition: all 2s ease;
`;

export const ReleaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: #3c403d;
  span {
    font-size: 1rem;
  }
`;
