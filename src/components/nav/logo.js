import React from "react";
import styled from "styled-components";
import BBCLogo from "../../assets/BBC_logo.png";

const Box = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgb(186, 186, 186);
  color: black;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;

const LogoImgWrapper = styled.div`
  width: 5.25rem;
  height: 1.5rem;
  padding: 0.5rem 1rem;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo = () => {
  return (
    <Box>
      <LogoImgWrapper>
        <LogoImg src={BBCLogo} alt="CBB logo" />
      </LogoImgWrapper>
    </Box>
  );
};

export default Logo;
