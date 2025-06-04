import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from './styles/Theme';

import Navbar from "./components/NavBar";
import Avatar from "./components/Avatar";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Avatar id="home" />
      <About id="about" />
      <Projects id="project" />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
