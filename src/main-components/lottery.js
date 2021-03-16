import React from "react";
import styled from "styled-components";
import Balls from "../assets/lottery.jpg";

const Container = styled.div`
  height: 148px;
  background-image: url("https://ichef.bbci.co.uk/news/1536/cpsprodpb/06a5/live/edf98750-1930-11eb-85c5-f555e0695185.jpg");
  background-size: cover;
  color: rgb(255, 255, 255);
  padding: 0 2rem;
  @media screen and (max-width: 1130px) {
    height: 170px;
  }
  @media screen and (max-width: 900px) {
    height: 220px;
  }
  @media screen and (max-width: 600px) {
    height: 262px;
    padding: 0 1rem;
  }
`;

const Background = styled.div`
  position: relative;
  height: 100%;
  margin: auto;
`;

const ImgContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  height: 100%;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
  width: 50%;
  padding-left: 2rem;
  padding-top: 1rem;
  @media screen and (max-width: 900px) {
    justify-content: end;
    width: 50%;
    padding: 0 1rem;
    padding-left: 0;
  }
  @media screen and (max-width: 600px) {
    width: auto;
    font-weight: 400;
    padding: 1rem;
    padding-left: 0;
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
  font-size: 1rem;
  line-height: 1.375rem;
  margin-bottom: 0.5rem;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 900px) {
    margin-top: 2rem;
  }
  @media screen and (max-width: 600px) {
    margin-top: 6rem;
  }
`;

const Link = styled.a`
  position: absolute;
  display: flex;
  width: fit-content;
  background-color: lightgray;
  color: rgb(0, 109, 239);
  font-weight: 400;
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
          <LinkContainer>
            <Link>RESULTS</Link>
          </LinkContainer>
        </TextContainer>
      </Background>
    </Container>
  );
};

export default LotteryBanner;
