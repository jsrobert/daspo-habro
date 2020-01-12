import styled from "styled-components";
import { FontManager } from "../common";

const Input = styled.input<{ size?: "xs" | "sm" | "md" | "lg" | "xl" }>`
  height: ${props => FontManager.getFontSize(props.size || "md").minHeight};
  border-radius: 0.25rem;
  outline: none;
  border: none;
  padding: 0rem 0.75rem;
  border: 2px solid white;
  border-color: gray;
  transition: border-color 0.25s;
  font-size: ${props => FontManager.getFontSize(props.size || "md").fontSize};
  width: 100%;
  :focus {
    border-color: blue;
    ::placeholder {
      transition: color 0.3s;
      color: transparent;
    }
  }
`;

export { Input };
