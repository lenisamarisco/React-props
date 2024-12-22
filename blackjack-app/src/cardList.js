import React from "react";
import Card from "./Card.css";

function CardList() {
  const cards = props.cards.map(cardId => (
    <Card cardId={cardId} key={cardId} />
  ));
  return <div>{cards}</div>;
}

export default CardList;
