import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Box from "@material-ui/core/Box";

const Container = styled(Box)`
  border-right: 1px solid rgb(186, 186, 186);
  :hover {
    cursor: pointer;
    box-shadow: 0px -15px 0px -9px ${(props) => props.backgroundColor} inset;
  }
`;

const MoreButton = ({ backgroundColor, onClick }) => {
  return (
    <Container
      display="flex"
      alignItems="center"
      padding={2}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      More
      <ArrowDropDownIcon />
    </Container>
  );
};

export default MoreButton;
