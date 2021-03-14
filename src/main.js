import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getData from "./dataHeadlines";
import CardBox from "./main-components/card";
import Grid from "@material-ui/core/Grid";

const Container = styled.div`
  display: grid;
  grid-template-rows: 5% repeat(18 auto);
`;

const Welcome = styled.div`
  font-size: 2rem;
  padding-left: 4rem;
  div {
    padding: 1rem 0px;
  }
`;

const Section = styled.div`
  background-color: rgb(238, 238, 238);
  padding: 2rem 4rem;
  box-sizing: border-box;
  background-image: url("${(props) => props.backgroundImage}");
  background-size: ${(props) => props.backgroundSize};
  height: ${(props) => props.sectionHeight}px;
`;

const SectionTitle = styled.div``;

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
        const isMultipleOfSeven = !index % 7;
        const firstHeadlineSize = isMultipleOfSeven ? 6 : 4;
        const sectionHeight = isMultipleOfSeven ? 450 : 390;

        return (
          <Section
            key={section.title}
            backgroundImage={section.style?.backgroundImage}
            backgroundSize={section.style?.backgroundSize}
            sectionHeight={sectionHeight}
          >
            <SectionTitle>{section.title}</SectionTitle>
            <Grid container spacing={2} style={{ height: "100%" }}>
              {section.headlines.map((headline, i) => (
                <Grid item key={i} xs={i === 0 ? firstHeadlineSize : true}>
                  <CardBox
                    subtitle={headline.subtitle}
                    img={headline.img}
                    category={headline.category}
                    largeHeadline={i === 0 && isMultipleOfSeven ? 240 : 140}
                  />
                </Grid>
              ))}
            </Grid>
          </Section>
        );
      })}
    </Container>
  );
};

export default Main;
