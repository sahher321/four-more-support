import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import React from "react";

const MuiThemeProvider = ({ children }) => {
  let theme = createTheme({
    typography: {
      fontFamily: ["Inter", "san-serif"].join(","),
    },
    palette: {
      primary: {
        main: "#E9BC03",
        light: "#FFFFFF",
      },
      secondary: {
        main: "#002035",
        dark: "#000000",
        light: "#F1F1F1",
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default MuiThemeProvider;
