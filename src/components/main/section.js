import React from "react";
import styled from "styled-components";
import CardBox from "./card";
import Grid from "@material-ui/core/grid";
import Box from "@material-ui/core/box";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Container = styled.div`
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

const Title = styled(Box)`
  font-size: 1.5rem;
  padding: 0.5rem 0;
  text-decoration: none;
  color: black;
  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const Section = ({
  backgroundImage,
  backgroundSize,
  title,
  arrow,
  headlines,
  isMultipleOfSix,
}) => {
  return (
    <Container
      backgroundImage={backgroundImage}
      backgroundSize={backgroundSize}
    >
      <Title
        display="flex"
        alignItems="center"
        component={arrow ? "a" : "div"}
        href="/"
      >
        {title}
        {arrow && <ArrowForwardIosIcon />}
      </Title>
      <Grid container spacing={2}>
        {headlines.map((headline, i) => (
          <Grid
            key={i}
            item
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
    </Container>
  );
};

export default Section;
