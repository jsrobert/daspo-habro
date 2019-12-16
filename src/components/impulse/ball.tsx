import styled, { keyframes, DefaultTheme, ThemeProps, StyledProps, StyledComponentProps, ThemedStyledProps, StyledComponent } from "styled-components";

const impulse = ( props: any ) => keyframes`
    0% {
        background: ${props.backColor};
        transform: scale(1);
        animation-timing-function: cubic-bezier(1,0,0.7,1);
    }
    40% {
        background: ${props.frontColor};
        transform: scale(1.5);
        animation-timing-function: cubic-bezier(0.3,0,0,1);
    }
    72.5% {
        background:${props.backColor};
        transform: scale(1);
        animation-timing-function: linear;
    }
    100% {
        background: ${props.backColor};
        transform: scale(1);
    }
`;

const Ball = ( props: any ) => {
  styled.div`
      position: absolute;
      top: ${props => `${props.y}${props.sizeUnit}`};
      left: ${props => `${props.x}${props.sizeUnit}`};
      width: ${props => `${props.size / 5}${props.sizeUnit}`};
      height: ${props => `${props.size / 5}${props.sizeUnit}`};
      border-radius: 50%;
      background-color: ${props => props.frontColor};
      animation: ${impulse} 1.25s linear infinite;
      animation-delay: ${props => props.index * 0.125}s;
    `;
  }

export default Ball;
