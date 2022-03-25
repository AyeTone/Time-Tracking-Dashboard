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

  let cards = type.map((card) => {
    let title = card.title;

    return (
      <Card
        key={title}
        title={title}
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
          title === "Work"
            ? Work
            : title === "Play"
            ? Play
            : title === "Study"
            ? Study
            : title === "Exercise"
            ? Exercise
            : title === "Social"
            ? Social
            : SelfCare
        }
      />
    );
  });

  return <Container>{cards}</Container>;
};

export default Cards;
