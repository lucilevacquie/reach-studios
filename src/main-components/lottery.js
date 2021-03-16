import React from "react";
import styled from "styled-components";
import Balls from "../assets/lottery.jpg";

const Container = styled.div`
  background-image: url("https://ichef.bbci.co.uk/news/1536/cpsprodpb/06a5/live/edf98750-1930-11eb-85c5-f555e0695185.jpg");
  background-size: cover;
  height: 148px;
  color: rgb(255, 255, 255);
  @media screen and (max-width: 1130px) {
    height: 170px;
  }
  @media screen and (max-width: 900px) {
    height: 220px;
  }
  @media screen and (max-width: 600px) {
    height: 262px;
  }
`;

const Background = styled.div`
  height: 100%;
  position: relative;
  margin: auto;
`;

const ImgContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: end;
  @media screen and (max-width: 600px) {
    align-items: end;
  }
`;

const Img = styled.img`
  width: auto;
  height: 100%;
  @media screen and (max-width: 600px) {
    height: 60%;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 4rem;
  margin-top: 1rem;
  z-index: 1;
  @media screen and (max-width: 900px) {
    width: 50%;
    justify-content: end;
    padding: 0 1rem;
    margin-left: 0;
  }
  @media screen and (max-width: 600px) {
    width: auto;
    padding: 1rem;
    margin-left: 0;
    font-weight: 400;
  }
`;

const Title = styled.div`
  font-size: 2.75rem;
  line-height: 3rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 900px) {
    font-size: 1.75rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 1rem;
  }
`;

const Subtitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.375rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 900px) {
    margin-top: 2rem;
  }
  @media screen and (max-width: 600px) {
    margin-top: 6rem;
  }
`;

const Button = styled.a`
  display: flex;
  position: absolute;
  background-color: lightgray;
  font-weight: 400;
  color: rgb(0, 109, 239);
  width: fit-content;
  padding: 10px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const LotteryBanner = () => {
  return (
    <Container>
      <Background>
        <ImgContainer>
          <Img src={Balls} alt="" />
        </ImgContainer>
        <TextContainer>
          <Title>National Lottery Draws</Title>
          <Subtitle>
            See the latest results, inclufing Lotto, EuroMillions, Set For Life
            and Thunderball
          </Subtitle>
          <ButtonContainer>
            <Button>RESULTS</Button>
          </ButtonContainer>
        </TextContainer>
      </Background>
    </Container>
  );
};

export default LotteryBanner;
