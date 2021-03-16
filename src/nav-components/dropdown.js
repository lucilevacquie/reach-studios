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
  flex-wrap: wrap;
`;

const Link = styled.div`
  margin: 1rem;
  padding-right: 34px;
  padding-top: 6px;
  padding-left: 4px;
  padding-bottom: 6px;
  :hover {
    background-color: black;
    color: white;
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
  height: 55%;
  border: none;
  background-color: transparent;
  :hover {
    background-color: black;
    color: white;
  }
`;

const Dropdown = ({ onClick, array }) => {
  return (
    <Container>
      <Links>
        {array.map((item) => {
          return (
            <Link key={item.id}>
              <a href={item.href}>{item.id}</a>
            </Link>
          );
        })}
      </Links>
      <CloseButton onClick={onClick}>
        <CloseIcon />
      </CloseButton>
    </Container>
  );
};

export default Dropdown;
