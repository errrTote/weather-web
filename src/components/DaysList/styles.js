import styled, { css } from "styled-components";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Card = styled.div`
  grid-area: forecast;
  display: grid;
  color: #fff;
  grid-template: 50px / 1fr 1fr 1fr 1fr;
  grid-template-areas: "date sky temp wind";
  background: #ededed;
  margin: 3px 0;
  border-radius: 5px;
  padding: .5em;
  justify-items: center;
  align-items: center;
  ${props =>
    props.color &&
    css`
      background: ${props.color};
    `
  }
`;

export const DateContainer = styled.div`
  grid-area: date;
`;

export const TempContainer = styled.div`
  grid-area: temp;
`;

export const SkyContainer = styled.div`
  grid-area: sky;
`;

export const WindContainer = styled.div`
  grid-area: wind;
`;

export const LogoContainer = styled.div`
  position: relative;
  img {
    position: absolute;
    bottom: -50px;
    left: -50px;
  }
`;

export const Title = styled.p`
  font-size: 14px;
`;

export const Text = styled.p`
  font-size: 12px;
`;

export const ArrowUpIcon = styled(TiArrowUpThick)`
  /* color: #2D5DBF; */
`

export const ArrowDownIcon = styled(TiArrowDownThick)`
  /* color: #bb3838; */
`