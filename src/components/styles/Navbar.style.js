import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  height: 10vh;
  align-items: center;
  color: white;
  background-color: #004e7c;
  div {
    font-size: 1.5rem;
    font-weight: 700;
  }
  input {
    border: 3px solid #00b4cc;
    border-right: none;
    padding: 0.5rem;
    border-radius: 5px 0 0 5px;
    outline: none;
  }
  button {
    padding: 0.5rem;
    border: 3px solid #00b4cc;
    background-color: #00b4cc;
    font-weight: 600;
    color: #ffffff;
  }
`;
