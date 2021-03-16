import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  border: none;
  background-color: white;
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

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  div {
    font-size: 1rem;
  }
`;

const NavButton = ({ backgroundColor, onClick }) => {
  return (
    <Button backgroundColor={backgroundColor} onClick={onClick}>
      <ButtonContent>
        <div>More</div>
        <ArrowDropDownIcon style={{ height: "2em" }} />
      </ButtonContent>
    </Button>
  );
};

export default NavButton;
