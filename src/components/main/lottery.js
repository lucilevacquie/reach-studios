import React from "react";
import styled from "styled-components";
import Balls from "../../assets/lottery.jpg";
import Box from "@material-ui/core/Box";

const Container = styled(Box)`
  height: 200px;
  background-color: rgba(32, 116, 241, 255);
  color: rgb(255, 255, 255);
  @media screen and (max-width: 900px) {
    height: 220px;
  }
  @media screen and (max-width: 600px) {
    height: 262px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const TextContainer = styled(Box)`
  z-index: 1;
  width: 60%;
  padding-left: 4rem;
  @media screen and (max-width: 1280px) {
    padding-left: 3rem;
  }
  @media screen and (max-width: 900px) {
    justify-content: end;
    padding-left: 2rem;
  }
  @media screen and (max-width: 600px) {
    width: auto;
    font-weight: 400;
    padding-left: 1rem;
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const Link = styled(Box)`
  @media screen and (max-width: 900px) {
    margin-top: 1rem;
  }
  @media screen and (max-width: 600px) {
    margin-top: 2rem;
  }
  width: fit-content;
  background-color: lightgray;
  color: rgba(32, 116, 241, 255);
  font-weight: 400;
  padding: 10px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const LotteryBanner = () => {
  return (
    <Container position="relative">
      <Box position="absolute" right={0} bottom={-4} maxWidth={300}>
        <Img src={Balls} alt="" />
      </Box>
      <TextContainer
        position="absolute"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        flexDirection="column"
        pt={1}
      >
        <Title>National Lottery Draws</Title>
        <Subtitle>
          See the latest results, inclufing Lotto, EuroMillions, Set For Life
          and Thunderball
        </Subtitle>
        <Link href="/" display="flex" flexDirection="row">
          RESULTS
        </Link>
      </TextContainer>
    </Container>
  );
};

export default LotteryBanner;
