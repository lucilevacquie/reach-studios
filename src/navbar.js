import React from "react";
import styled from "styled-components";
import BBCLogo from "./assets/BBC_logo.png";

const data = [
  {
    id: "Sign in",
    src: "",
    href: "/",
  },
  {
    id: "bell",
    src: "",
    href: "/",
  },
  {
    id: "Home",
    src: "",
    href: "/",
  },
  {
    id: "News",
    src: "",
    href: "/",
  },
  {
    id: "Sport",
    src: "",
    href: "/",
  },
  {
    id: "Weather",
    src: "",
    href: "/",
  },
  {
    id: "iPlayer",
    src: "",
    href: "/",
  },
  {
    id: "Sounds",
    src: "",
    href: "/",
  },
  {
    id: "CBBC",
    src: "",
    href: "/",
  },
  {
    id: "CBeebies",
    src: "",
    href: "/",
  },
  {
    id: "More",
    src: "",
    href: "/",
  },
  {
    id: "Search",
    src: "",
    href: "/",
  },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(14, auto);
`;

const Logo = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <button>
          <img src={BBCLogo} alt="CBB logo" />
        </button>
      </Logo>
    </Container>
  );
};

export default Navbar;
