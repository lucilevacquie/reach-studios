import React from "react";
import styled from "styled-components";

import Navbar from "./navbar";
import Main from "./main";
import Footer from "./footer";

const Container = styled.div`
  display: grid;
  grid-template-rows: 5% 75% 20%;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
