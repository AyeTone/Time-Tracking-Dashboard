import { useState } from "react";
import Card from "./Card/Card";
import { Container } from "./CardsStyle";
import Data from "../../data.json";

import Work from "../../images/icon-work.svg";
import Play from "../../images/icon-play.svg";
import Study from "../../images/icon-study.svg";
import Exercise from "../../images/icon-exercise.svg";
import Social from "../../images/icon-social.svg";
import SelfCare from "../../images/icon-self-care.svg";

const Cards = () => {
  const [Type, setType] = useState(Data);

  let cards = Type.map((card) => (
    <Card
      key={card.title}
      title={card.title}
      current={card.timeframes.daily.current}
      prev={card.timeframes.daily.previous}
      bg={card.bg}
      image={
        card.title === "Work"
          ? Work
          : card.title === "Play"
          ? Play
          : card.title === "Study"
          ? Study
          : card.title === "Exercise"
          ? Exercise
          : card.title === "Social"
          ? Social
          : SelfCare
      }
    />
  ));

  return <Container>{cards}</Container>;
};

export default Cards;
