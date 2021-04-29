import React from "react";
import { Container, BigText } from "./styles";

export const HeaderComponent = ({ city }) => {
  return (
    <Container >
      <BigText data-testid="headerCity" >{city}</BigText>
    </ Container>
  )
}