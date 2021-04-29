import React from "react";
import { getSkyDescription, getWindSpeed, getWindDirection } from "../../utils/data";
import {
  Container,
  SkyCondition,
  IconContainer,
  CelsiusContainer,
  LimitsContainer,
  WindContainer,
  BigText,
  Text,
  BoldText,
  FireIcon,
  SnowIcon,
  WindIcon
} from "./styles";

export const WeatherPanel = ({ data }) => {

  const {
    skyCondition,
    skyDescription,
    temp,
    temp_min,
    temp_max,
    feels_like,
    deg,
    speed,
    urlIcon,
    color
  } = data;

  return (

    <Container color={color}>
      <SkyCondition>
        <BoldText>{getSkyDescription(skyCondition)}</BoldText>
        <Text>{skyDescription}</Text>
        <IconContainer>
          <img src={urlIcon} alt={skyCondition} />
        </IconContainer>
      </SkyCondition>
      <CelsiusContainer>
        <BigText>{Math.round(temp)}°</BigText>
        <Text>Sensación <BoldText>{Math.round(feels_like)}°</BoldText></Text>
        <LimitsContainer>
          <Text>
            <FireIcon /> <BoldText>{Math.round(temp_max)}° </BoldText>
            <SnowIcon /> <BoldText>{Math.round(temp_min)}° </BoldText>
          </Text>
        </LimitsContainer>
      </CelsiusContainer>
      <WindContainer>
        <WindIcon />
        <BoldText>{getWindDirection(deg)}</BoldText>
        <Text>{getWindSpeed(speed)} km/h</Text>
      </WindContainer>
    </Container>
  )
}