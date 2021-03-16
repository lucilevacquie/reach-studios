import React from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";

const Container = styled(Box)`
  border-right: 1px solid rgb(186, 186, 186);
  :hover {
    box-shadow: 0px -15px 0px -9px ${(props) => props.$backgroundColor} inset;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const NavLink = ({ backgroundColor, id, href }) => {
  return (
    <Container
      display="flex"
      alignItems="center"
      px={1.5}
      $backgroundColor={backgroundColor}
    >
      <a href={href}>{id}</a>
    </Container>
  );
};

export default NavLink;
