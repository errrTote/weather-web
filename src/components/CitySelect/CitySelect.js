import React from "react";
import { Container, Select } from "./styles";
export const SelectComponent = ({ cities, onSetCity }) => {
  return (
    <Container>
      <Select onChange={onSetCity} >
        {cities.map(city => <option key={city.id} value={city.id}>{city.description}</option>)}
      </Select>
    </Container>
  )
}