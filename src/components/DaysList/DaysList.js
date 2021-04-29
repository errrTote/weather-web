import React from "react";
import { Container } from "./styles";
import { DayCard } from "./DayCard";
export const DaysListComponent = ({ days }) => {

  return (
    <Container>
      {days.map(day => <DayCard key={day.date} data={day} />)}
    </Container>
  )
}