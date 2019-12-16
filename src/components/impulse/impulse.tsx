import React from "react";
import PropTypes from "prop-types";
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

interface IWrapperDiv {

}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => `${props.size}${props.sizeUnit}`};
  height: ${props => `${props.size / 5}${props.sizeUnit}`};
`;

const Ball = styled.div`
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

type BallProps = {
    countBalls: number,
    frontColor: string,
    backColor: string,
    size: number,
    sizeUnit: number
}

const getBalls = (config: BallProps) => {
  const balls = [];
  for (let i = 0; i < config.countBalls; i++) {
    balls.push(
      <Ball frontColor={config.frontColor}
        backColor={config.backColor}
        size={config.size}
        x={i * (config.size / 5 + config.size / 5)}
        y={0}
        key={i.toString()}
        index={i}
        sizeUnit={config.sizeUnit}
      />
    );
  }
  return balls;
};

type SpinnerProps = {
    size: number,
    frontColor: string,
    backColor: string,
    loading: any,
    sizeUnit: number
}

export const ImpulseSpinner = (config: SpinnerProps) => {
  const countBalls = 3;
  const frontColor = config.frontColor;
  const backColor = config.backColor;
  const size = config.size;
  const sizeUnit = config.sizeUnit;
  return (
    config.loading && (
      <Wrapper size={size} sizeUnit={sizeUnit}>
        {getBalls({
          countBalls,
          frontColor,
          backColor,
          size,
          sizeUnit
        })}
      </Wrapper>
    )
  );
};

// interface WrapperProps {
//     position: string,
//     display: string,
//     justifycontent: string,
//     alignitems: string,
//     width: string,
//     height: string,
// }

const WrapperComponent: StyledComponent<"div", DefaultTheme, wrapperStyle, never > = {

}

ImpulseSpinner.defaultProps = {
  loading: true,
  size: 40,
  frontColor: "#00ff89",
  backColor: "#4b4c56",
  sizeUnit: "px"
};

ImpulseSpinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  frontColor: PropTypes.string,
  backColor: PropTypes.string,
  sizeUnit: PropTypes.string
};

Ball.defaultProps = {
  countBalls: 6,
  loading: true,
  size: 40,
  frontColor: "#00ff89",
  backColor: "#4b4c56",
  sizeUnit: "px"
};

Ball.propTypes = {
  countBalls: PropTypes.number,
  frontColor: PropTypes.string,
  backColor: PropTypes.string,
  size: PropTypes.number,
  sizeUnit: PropTypes.number,
};
