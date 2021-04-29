import styled, {keyframes, css} from "styled-components";

const pulseSpiner = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`


export const SpinerContainer = styled.div`
  display: grid;
  grid-template-rows: 80vh;
  ${props =>
    !props.main && css`
      grid-template-rows: 20vh;
    `
  }
`;

export const StyledSpinner = styled.div`
  position: relative;
  justify-self: center;
  align-self: center;
  width: 80px;
  & div {
    position: absolute;
    border: 4px solid #48484a;
    opacity: 1;
    border-radius: 50%;
    animation: ${pulseSpiner} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    ${props =>
      props.styles && css`
        border: 4px solid ${props.styles.primaryColor};
      `
    }
    
    &:nth-child(2){
      animation-delay: -0.5s;
    }
  }

`;
