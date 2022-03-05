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

import Ellipsis from "../../../images/icon-ellipsis.svg";

const Card = ({ title, current, prev }) => {
  return (
    <Container>
      <CardInfo>
        <Heading>
          <Title>{title}</Title>
          <Dots src={Ellipsis} />
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
