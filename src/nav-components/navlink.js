import React from "react";
import styled from "styled-components";

const Box = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgb(186, 186, 186);
  justify-content: center;
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
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: center;
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
