import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import CardBox from "./card";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    category: "Lorem ipsum",
    img: "assets/bigben.jpg",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    category: "Lorem ipsum",
    img: "assets/pisa-tower.jpg",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    category: "Lorem ipsum",
    img: "assets/eiffel-tower.jpg",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    category: "Lorem ipsum",
    img: "assets/eiffel-tower.jpg",
  },
];

const Section = styled.div`
  height: auto;
  box-sizing: border-box;
  background-image: url("https://ichef.bbci.co.uk/images/ic/raw/p08bd52y.png");
  background-size: cover;
  padding: 2rem 3rem;
  @media screen and (max-width: 900px) {
    padding: 2rem 2rem;
  }
  @media screen and (max-width: 642px) {
    padding: 2rem 1rem;
  }
  @media screen and (max-width: 600px) {
    background-color: rgb(40, 40, 40) !important;
    background-image: url("");
    padding: 2rem 0.5rem;
  }
`;

const SectionTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  padding: 0.5rem 0;
  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
    color: lightgray;
  }
`;

const BbcIPlayer = () => {
  return (
    <Section>
      <SectionTitle>BBC iPlayer: Like nowhere else</SectionTitle>
      <Grid container spacing={2}>
        {data.map((item) => {
          return (
            <Grid item key={item.id} md={3} sm={6} xs={12}>
              <CardBox
                subtitle={item.title}
                img={item.img}
                category={item.category}
              />
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};

export default BbcIPlayer;
