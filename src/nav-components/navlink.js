import React from "react";
import styled from "styled-components";

const Box = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgb(186, 186, 186);
  color: black;
  text-decoration: none;
  :hover {
    background-image: linear-gradient(
      white,
      white,
      white,
      ${(props) => props.backgroundColor}
    );
    cursor: pointer;
  }
`;

const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.05rem 0.875rem 0.05rem 0.875rem;
`;

const NavLink = ({ backgroundColor, id, href }) => {
  return (
    <Box backgroundColor={backgroundColor} href={href}>
      <BoxContent>{id}</BoxContent>
    </Box>
  );
};

export default NavLink;
