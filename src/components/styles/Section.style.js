import styled from "styled-components";

export const Section = styled.div`
  margin-left: 1.5rem;
  margin-top: 2rem;
`;
export const Row = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  /* margin: 1rem; */
`;
export const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const Poster = styled.img`
  object-fit: contain;
  width: 100%;
  padding: 0.7rem;
  max-height: ${(props) => (props.isLargeSection ? "17rem" : "9rem")};
  transition: all 450ms;
  &:hover {
    /* transform: scale(1.08); */
    transform: ${(props) =>
      props.isLargeSection ? "scale(1.1)" : "scale(1.08)"};
  }
`;
