import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template: 75px 40px 178px / 1fr 1fr;
  grid-template-areas:
        "header header"
        "citySelect forecast"
        "weather forecast";
  gap: 10px;

  @media (max-width: 720px) {
    grid-template: auto / 1fr;
    grid-template-areas:
          "header "
          "citySelect"
          "weather"
          "forecast";
  }
`

export const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`