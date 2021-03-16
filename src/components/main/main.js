import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getData from "../../data/dataHeadlines";
import Section from "./section";
import Banner from "./banner.js";
import Lottery from "./lottery";
import Other from "./other";
import BbcIPlayer from "./bbciplayer";

const Container = styled.div`
  font-family: "Roboto", sans-serif;
`;

const Welcome = styled.h1`
  padding-left: 3rem;
  @media screen and (max-width: 600px) {
    padding-left: 1rem;
  }
`;

const Main = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getData();
      setSections(response);
    };
    fetch();
  }, []);

  return (
    <Container>
      <Welcome>Welcome to the BBC</Welcome>

      {sections.map((section, index) => {
        const isMultipleOfSix = !(index % 6);
        if (section.type === "banner") {
          return (
            <Banner
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              img={section.img}
              category={section.category}
            />
          );
        }
        return (
          <Section
            key={section.title}
            backgroundImage={section.style?.backgroundImage}
            backgroundSize={section.style?.backgroundSize}
            title={section.title}
            arrow={section.arrow}
            isMultipleOfSix={isMultipleOfSix}
            headlines={section.headlines}
          />
        );
      })}
      <Lottery />
      <Other />
      <BbcIPlayer />
    </Container>
  );
};

export default Main;
