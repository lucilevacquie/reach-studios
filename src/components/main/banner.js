import React from "react";
import styled from "styled-components";
import Box from "@material-ui/core/box";

const Container = styled(Box)`
  background-color: darkred;
  height: 440px;
  padding: 2rem 3rem;
  @media screen and (max-width: 900px) {
    padding: 1rem;
  }
  @media screen and (max-width: 642px) {
    padding: 1rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 0.5rem;
  }
`;

const Background = styled(Box)`
  height: 100%;
  width: 100%;
`;

const TextContainer = styled(Box)`
  height: 100%;
  width: 50%;
  z-index: 1;
  color: lightgray;
  @media screen and (max-width: 900px) {
    justify-content: end;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: lightgray;
    font-size: 2.75rem;
    line-height: 3rem;
    padding: 2rem 0;
    @media screen and (max-width: 900px) {
      padding: 1rem 0;
    }
    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

const Catch = styled(Box)`
  width: fit-content;
  border: 1px solid lightgray;
  background-color: lightgray;
  color: black;
`;

const Category = styled.div`
  border-top: solid lightgray 3px;
  width: fit-content;
  margin-top: 2rem;
`;

const ImgContainer = styled(Box)`
  width: 100%;
  height: 380px;
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
  img {
    height: 100%;
  }
`;

const Banner = ({ title, subtitle, img, category }) => {
  return (
    <Container display="flex" boxSizing="border-box">
      <Background display="flex" position="relative">
        <TextContainer
          display="flex"
          flexDirection="column"
          position="absolute"
          justifyContent="center"
        >
          <Catch boxSizing="border-box" padding={0.5}>
            WHAT A MARVEL
          </Catch>
          <a href="/">{title}</a>
          <div>{subtitle}</div>
          <Category>{category}</Category>
        </TextContainer>
        <ImgContainer display="flex" justifyContent="end">
          <img src={img} alt="" />
        </ImgContainer>
      </Background>
    </Container>
  );
};

export default Banner;
