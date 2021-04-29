import React from "react";
import { SpinerContainer, StyledSpinner } from "./styles";

export const Spinner = ({ main }) => {
  return (
    <SpinerContainer main={main} >
      <StyledSpinner><div></div><div></div></StyledSpinner>
    </SpinerContainer>
  )
}