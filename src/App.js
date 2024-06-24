import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./Components/NavBar";
import Body from "./Components/Body";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Body />
    </ThemeProvider>
  );
}

export default App;
