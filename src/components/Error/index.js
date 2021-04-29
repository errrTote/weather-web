import React from "react";
import { Container, Text, ErrorIcon } from "./styles";

export const Error = () => {

  return (
    <Container>
      <ErrorIcon />
      <Text>Ha ocurrido un error</Text>
    </Container>
  )
}