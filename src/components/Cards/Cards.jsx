import { useState, useContext } from "react";
import Card from "./Card/Card";
import { Container } from "./CardsStyle";
import Data from "../../data.json";
import { TimeFramesContext } from "../../Context/timeFrameContext";

import Work from "../../images/icon-work.svg";
import Play from "../../images/icon-play.svg";
import Study from "../../images/icon-study.svg";
import Exercise from "../../images/icon-exercise.svg";
import Social from "../../images/icon-social.svg";
import SelfCare from "../../images/icon-self-care.svg";

const Cards = () => {
  const [type, setType] = useState(Data);
  const { timeFrames } = useContext(TimeFramesContext);
  console.log(timeFrames);

  let cards = type.map((card) => (
    <Card
      key={card.title}
      title={card.title}
      current={
        timeFrames[0].isActive === true
          ? card.timeframes.daily.current
          : timeFrames[1].isActive === true
          ? card.timeframes.weekly.current
          : card.timeframes.monthly.current
      }
      prev={
        timeFrames[0].isActive === true
          ? card.timeframes.daily.previous
          : timeFrames[1].isActive === true
          ? card.timeframes.weekly.previous
          : card.timeframes.monthly.previous
      }
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
