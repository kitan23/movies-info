import styled from "styled-components";

export const NavStyle = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  z-index: 1;
  height: 28px;
  align-items: center;
  background-color: ${(props) => props.show && "#181818"};
  transition-timing-function: ease-in;
  transition: all 0.5s;
  .nav_logo {
    position: fixed;
    left: 20px;
    width: 100px;
    object-fit: contain;
  }
  .nav_user {
    position: fixed;
    right: 20px;
    width: 40px;
    object-fit: contain;
  }
`;
