import styled from "styled-components";

export const BannerStyle = styled.div`
  color: white;
  background-image: ${(props) => props.backgroundImage};
  background-position: center;
  background-size: cover;
  object-fit: contain;
  height: 65vh;
  .banner_fadeBottom {
    height: 50vh;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
  }
`;

export const BannerContent = styled.div`
  height: 10vh;
  padding-top: 8rem;
  margin-left: 1.5rem;
  .banner_title {
    font-size: 2rem;
    font-weight: 700;
  }
  .banner_overview {
    width: 33vw;
    line-height: 1.3;
    font-size: 1rem;
    max-height: 10rem;
    /* max-width: 200px; */
  }
  @media only screen and (max-width: 800px) {
    .banner_overview {
      width: 200px;
    }
  }

  .banner_buttons {
    margin: 1rem 0;
  }
  button {
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    font-size: 1.1rem;
    border-radius: 7px;
    margin-right: 1rem;
    padding: 0.5rem 2rem 0.5rem 2rem;
    background-color: rgba(51, 51, 51, 0.5);
    &:hover {
      color: #000;
      background-color: #edede8;
      transition: all 0.5s;
    }
  }
`;
