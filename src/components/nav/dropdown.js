import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/box";
import Button from "@material-ui/core/button";

const Container = styled(Box)`
  border-bottom: 1px solid rgb(186, 186, 186);
`;

const Links = styled(Box)`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1.5rem 0.5rem 0;
    :hover {
      background-color: black;
      color: white;
    }
  }
`;

const CloseButton = styled(Button)`
  background-color: none;
  :hover {
    text-decoration: none;
    background-color: black;
    color: white;
  }
`;

const Dropdown = ({ onClick, array }) => {
  return (
    <Container display="flex" px={6} py={2}>
      <Links display="flex" flexWrap="wrap">
        {array.map((item) => {
          return (
            <a key={item.id} href={item.href}>
              {item.id}
            </a>
          );
        })}
      </Links>
      <CloseButton onClick={onClick} padding={1}>
        <CloseIcon />
      </CloseButton>
    </Container>
  );
};

export default Dropdown;
