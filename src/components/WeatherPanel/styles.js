import styled, { css } from "styled-components";
import { FaSnowflake, FaFireAlt } from "react-icons/fa";
import { GiWindsock } from "react-icons/gi";

export const Container = styled.div`
  grid-area: weather;
  display: grid;
  color: #fff;
  min-height: 35px;
  padding: 1em;
  gap: 5px;
  border-radius: 5px;
  grid-template: auto / 1fr 2fr 1fr;
  justify-content: space-around;
  grid-template-areas: "skyCondition celsius wind"
                      "skyCondition celsius  wind";
  ${props =>
    props.color &&
    css`
      background: ${props.color};
    `
  }
`

export const SkyCondition = styled.div`
  grid-area: skyCondition;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const IconContainer = styled.div``

export const CelsiusContainer = styled.div`
  grid-area: celsius;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LimitsContainer = styled.div`
  
`

export const WindContainer = styled.div`
  grid-area: wind;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const BigText = styled.p`
  font-size: 50px;
`

export const Text = styled.p`
  font-size: 16px;
`

export const BoldText = styled.span`
  font-weight: bold;
`

export const WindIcon = styled(GiWindsock)`
  font-size: 50px;
`

export const FireIcon = styled(FaFireAlt)`
  color: #bb3838;
`

export const SnowIcon = styled(FaSnowflake)`
`

export const EmptyContainer = styled.div`
  grid-area: weather;
  flex-grow: 4;
  display: grid;
  background: #123;
  color: #fff;
  min-height: 35px;
  padding: 1em;
  gap: 5px;
  border-radius: 5px;
  grid-template: auto / 1fr 2fr 1fr;
  justify-content: space-around;
  grid-template-areas: "skyCondition celsius wind"
                      "skyCondition celsius  wind";
  ${props =>
    props.color &&
    css`
      background: ${props.color};
    `
  }
`