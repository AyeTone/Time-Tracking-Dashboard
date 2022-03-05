import React from "react";
import {
  CardInfo,
  Container,
  CurrentTime,
  Dots,
  Heading,
  PrevTime,
  Times,
  Title,
} from "./CardStyles";

const Card = () => {
  return (
    <Container>
      <CardInfo>
        <Heading>
          <Title></Title>
          <Dots></Dots>
        </Heading>
        <Times>
          <CurrentTime></CurrentTime>
          <PrevTime>Last Week - </PrevTime>
        </Times>
      </CardInfo>
    </Container>
  );
};

export default Card;
