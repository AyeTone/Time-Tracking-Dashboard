import { useState } from "react";
import Card from "./Card/Card";
import { Container } from "./CardsStyle";
import Data from "../../data.json";

const Cards = () => {
  const [Type, setType] = useState(Data);

  let cards = Type.map((card) => (
    <Card
      key={card.title}
      title={card.title}
      current={card.timeframes.daily.current}
      prev={card.timeframes.daily.previous}
      bg={card.bg}
    />
  ));

  console.log(cards);
  return <Container>{cards}</Container>;
};

export default Cards;
