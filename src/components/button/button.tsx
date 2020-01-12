import * as React from "react";
import styled from "styled-components";
import { getValues } from "../common";
//import { ImpulseSpinner } from "../impulse/impulse";

const SpinnerButton = styled.button`
  height: 30px;
  min-width: 100px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;

// export { Button };

// import styled from "styled-components";
// import { ImpulseSpinner } from "./Impulse";
// import * as React from "react";

const Spinner = ({ size }: any) => (
  <SpinnerButton />
  // <ImpulseSpinner
  //   size={size}
  //   loading={true}
  //   frontColor="#FF00FB"
  //   backColor="#aa00a7"
  // />
);

interface ButtonProps {
  loading?: boolean;
  size?: "xs" | "sm" | "lg" | "xl";
}

const Button = styled.button.attrs<ButtonProps>(props => {
  const loaderSize = getValues(props.size || "md").loader;
  return {
    children: props.loading ? (
      <span
        style={{
          width: getValues(props.size || "md").minWidth + "px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Spinner size={loaderSize} />
      </span>
    ) : (
      <span id="child">{props.children}</span>
    ),
    disabled: props.loading
  };
})<ButtonProps>`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ size = "md" }) => getValues(size).minHeight};
  min-width: ${({ size = "md" }) => getValues(size).minWidth};
  border-radius: 0.3rem;
  background: #aa00a7;
  color: white;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  margin: 30px;
  font-size: ${({ size = "md" }) => getValues(size).fontSize};
  padding-right: 2rem;
  padding-left: 2rem;
  transition: transform 0.25s ease-in, filter 0.25s;
  :focus {
    filter: brightness(110%);
    transform: scale(0.98);
    border: 2px solid #333;
  }
  :active {
    transform: scale(0.98);
    border: none;
  }
  :hover {
    filter: brightness(110%);
    border: none;
  }
  :disabled {
    transform: scale(0.98);
    filter: brightness(100%);
    cursor: default;
    border: none;
  }
`;

export { Button };
