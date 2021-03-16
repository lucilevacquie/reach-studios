import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: darkred;
  box-sizing: border-box;
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

const Background = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
  z-index: 1;
  color: lightgray;
  @media screen and (max-width: 900px) {
    justify-content: end;
    width: 100%;
  }
`;

const Catch = styled.div`
  width: fit-content;
  box-sizing: border-box;
  border: 1px solid lightgray;
  background-color: lightgray;
  color: black;
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

const Line = styled.div`
  width: fit-content;
  border-top: solid lightgray 3px;
  margin-top: 2rem;
  @media screen and (max-width: 900px) {
    margin-top: 1rem;
  }
`;

const Category = styled.div`
  width: fit-content;
  margin-top: 0.5rem;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: end;
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
          <div>{subtitle}</div>
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
