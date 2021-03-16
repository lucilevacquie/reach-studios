import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getData from "./dataHeadlines";
import CardBox from "./main-components/card";
import Banner from "./main-components/banner.js";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Lottery from "./main-components/lottery";
import Other from "./main-components/other";
import BbcIPlayer from "./main-components/bbciplayer";

const Container = styled.div`
  display: grid;
  grid-template-rows: 5% repeat(18 auto);
  font-family: "Roboto", sans-serif;
`;

const Welcome = styled.div`
  font-size: 2rem;
  padding-left: 3rem;
  div {
    padding: 1rem 0px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 1rem;
  }
`;

const Section = styled.div`
  height: auto;
  box-sizing: border-box;
  background-color: rgb(238, 238, 238);
  background-image: url("${(props) => props.backgroundImage}");
  background-size: ${(props) => props.backgroundSize};
  padding: 2rem 3rem;
  @media screen and (max-width: 900px) {
    padding: 2rem 2rem;
  }
  @media screen and (max-width: 642px) {
    padding: 2rem 1rem;
  }
  @media screen and (max-width: 600px) {
    background-image: url("");
    background-size: 0;
    padding: 2rem 0.5rem;
  }
`;

const SectionTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  padding: 0.5rem 0;
  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
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
      <Welcome>
        <div>Welcome to the BBC</div>
      </Welcome>

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
          >
            <SectionTitle>
              {section.title}
              {section.arrow === true && <ArrowForwardIosIcon />}
            </SectionTitle>

            <Grid container spacing={2}>
              {section.headlines.map((headline, i) => (
                <Grid
                  item
                  key={i}
                  md={isMultipleOfSix ? (i === 0 ? 6 : 3) : 4}
                  sm={isMultipleOfSix ? (i === 0 ? 6 : 3) : 4}
                  xs={isMultipleOfSix ? (i === 0 ? 12 : 6) : 12}
                >
                  <CardBox
                    subtitle={headline.subtitle}
                    img={headline.img}
                    category={headline.category}
                    largeHeadline={i === 0 && isMultipleOfSix ? 240 : 140}
                  />
                </Grid>
              ))}
            </Grid>
          </Section>
        );
      })}
      <Lottery />
      <Other />
      <BbcIPlayer />
    </Container>
  );
};

export default Main;
