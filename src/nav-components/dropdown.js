import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(186, 186, 186);
  padding: 0 2rem;
`;

const Links = styled.div`
  display: flex;
`;

const Link = styled.div`
  margin: 1rem;
  padding-right: 34px;
  padding-top: 6px;
  padding-left: 4px;
  padding-bottom: 6px;
  :hover {
    color: white;
    background-color: black;
  }
  a {
    text-decoration: none;
    color: black;
    :hover {
      color: white;
    }
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  :hover {
    color: white;
    background-color: black;
  }
`;

const Dropdown = ({ onClick }) => {
  return (
    <Container>
      <Links>
        <Link>
          <a href="/">Blablabla</a>
        </Link>
        <Link>
          <a href="/">Blablabla</a>
        </Link>
      </Links>
      <CloseButton onClick={onClick}>
        <CloseIcon />
      </CloseButton>
    </Container>
  );
};

export default Dropdown;
