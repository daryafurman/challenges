import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "purple")};
  margin: 2rem;

  &:hover {
    background-color: orange;
  }
`;

export default function BoxWithStyledComponents({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack} />;
}
