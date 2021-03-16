import React from "react";
import styled from "styled-components";

import Navbar from "./components/nav/navbar";
import Main from "./components/main/main";
import Footer from "./components/main/footer";

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
