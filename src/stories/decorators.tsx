import React from "react";
import { ThemeProvider } from "styled-components";

export const withTheme = (storyFn: any) => (
  <ThemeProvider theme={{ mode: "dark" }}>{storyFn()}</ThemeProvider>
);