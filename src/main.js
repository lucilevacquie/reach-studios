import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getData from "./data";
import CardBox from "./components/card";

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
`;

const SectionTitle = styled.div``;

const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
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
      {sections.map((section) => (
        <Section
          key={section.title}
          backgroundImage={section.style?.backgroundImage}
          backgroundSize={section.style?.backgroundSize}
        >
          <SectionTitle>{section.title}</SectionTitle>
          <SectionContent>
            {section.headlines.map((headline) => (
              <CardBox
                key={headline.subtitle}
                subtitle={headline.subtitle}
                img={headline.img}
                category={headline.category}
              />
            ))}
          </SectionContent>
        </Section>
      ))}
    </Container>
  );
};

export default Main;
