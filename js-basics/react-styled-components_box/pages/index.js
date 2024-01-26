import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  return (
    <div>
      <Container>
        <BoxWithClassName />
        <BoxWithClassName isBlack />
        <BoxWithStyledComponents $isBlack={false} />
        <BoxWithStyledComponents $isBlack={true} />
      </Container>
    </div>
  );
}
