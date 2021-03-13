import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getData from "./data";
import CardBox from "./components/card";
import Grid from "@material-ui/core/Grid";

const Container = styled.div`
  display: grid;
  grid-template-rows: 5% repeat(18 auto);
`;

const Welcome = styled.div`
  font-size: 2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  div {
    padding: 1rem 0px;
  }
`;

const Section = styled.div`
  background-color: lightgrey;
  font-size: 1.5rem;
  padding: 1rem;
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
        const isMultipleOfSeven = index % 7;
        const firstHeadlineSize = isMultipleOfSeven ? 4 : 6;
        const sectionHeight = isMultipleOfSeven ? 450 : 390;

        return (
          <Section
            key={section.title}
            backgroundImage={section.style?.backgroundImage}
            backgroundSize={section.style?.backgroundSize}
          >
            <SectionTitle>{section.title}</SectionTitle>
            <Grid container spacing={2} style={{ height: sectionHeight }}>
              {section.headlines.map((headline, i) => (
                <Grid item xs={i === 0 ? firstHeadlineSize : true}>
                  <CardBox
                    key={headline.subtitle}
                    subtitle={headline.subtitle}
                    img={headline.img}
                    category={headline.category}
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
