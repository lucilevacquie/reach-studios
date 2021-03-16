import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: darkred;
  box-sizing: border-box;
  height: 440px;
  padding: 2rem 3rem;
  @media screen and (max-width: 1280px) {
    padding: 2rem 3rem;
    /* max-width: 63rem; */
  }
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

const Background = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  @media screen and (max-width: 900px) {
    width: 100%;
    justify-content: end;
  }
`;

const Catch = styled.div`
  box-sizing: border-box;
  border: 1px solid lightgray;
  color: black;
  background-color: lightgray;
  width: fit-content;
  padding: 2px;
`;

const Title = styled.a`
  text-decoration: none;
  font-size: 2.75rem;
  line-height: 3rem;
  padding: 2rem 0;
  @media screen and (max-width: 900px) {
    padding: 1rem 0;
  }
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.div``;

const Line = styled.div`
  border-top: solid lightgray 3px;
  margin-top: 2rem;
  width: fit-content;
  @media screen and (max-width: 900px) {
    margin-top: 1rem;
  }
`;

const Category = styled.div`
  width: fit-content;
  margin-top: 0.5rem;
`;

const ImgContainer = styled.div`
  justify-content: end;
  display: flex;
  width: 100%;
  height: 380px;
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

const Img = styled.img`
  height: 100%;
`;

const Banner = ({ title, subtitle, img, category }) => {
  return (
    <Container>
      <Background>
        <TextContainer>
          <Catch>WHAT A MARVEL</Catch>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Line>
            <Category>{category}</Category>
          </Line>
        </TextContainer>
        <ImgContainer>
          <Img src={img} alt="" />
        </ImgContainer>
      </Background>
    </Container>
  );
};

export default Banner;
