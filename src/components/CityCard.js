import React from "react";
import { Card, CardTitle } from 'react-materialize'
import '../styling/CityCard.css'

const CityCard = ({city}) => {
  return (
    <Card
      className="small city-card"
      header={<CardTitle image={city.img}>{city.name}</CardTitle>}
    >
      {city.summary}
    </Card>
  );
};

export default CityCard;
