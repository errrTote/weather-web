import React from "react";
import { Card, DateContainer, SkyContainer, TempContainer, WindContainer, LogoContainer, Text, Title, ArrowUpIcon, ArrowDownIcon } from "./styles";
import { getSkyDescription, getWindSpeed, getWindDirection } from "../../utils/data";

export const DayCard = ({ data }) => {
  return (
    <Card color={data.color}>
      <DateContainer>
        <Title>{data.day}</Title>
        <Text>{data.date} - {data.month}</Text>
      </DateContainer>
      <SkyContainer>
        <LogoContainer>
          <img src={data.urlIcon} alt={data.main} />
        </LogoContainer>
      </SkyContainer>
      <TempContainer>
        <Title>{getSkyDescription(data.main)}</Title>
        <Text><ArrowUpIcon />{data.maxTemp}°</Text>
        <Text><ArrowDownIcon />{data.minTemp}°</Text>
      </TempContainer>
      <WindContainer>
        <Title>{getWindDirection(data.degrees)}</Title>
        <Text> {getWindSpeed(data.maxWind)}km/h</Text>
        <Text>{getWindSpeed(data.minWind)}km/h</Text>
      </WindContainer>
    </Card>
  )
}