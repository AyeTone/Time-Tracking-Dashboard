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

const Card = ({ title, current, prev }) => {
  return (
    <Container>
      <CardInfo>
        <Heading>
          <Title>{title}</Title>
          <Dots></Dots>
        </Heading>
        <Times>
          <CurrentTime> {current}hrs </CurrentTime>
          <PrevTime>Last Week - {prev}hrs </PrevTime>
        </Times>
      </CardInfo>
    </Container>
  );
};

export default Card;
