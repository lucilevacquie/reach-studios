import React from "react";
import styled from "styled-components";
import BBCLogo from "./assets/BBC_logo.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";

const data = [
  {
    id: "Sign in",
    src: "",
    href: "/",
    icon: <AccountCircleIcon />,
  },
  {
    id: "",
    src: "",
    href: "/",
    icon: <NotificationsIcon />,
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
    icon: <ArrowDropDownIcon />,
  },
  {
    id: "Search",
    src: "",
    href: "/",
    icon: <SearchIcon />,
  },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(14, auto);
  border-bottom: solid gray 1px;
`;

const Box = styled.a`
  display: flex;
  align-items: center;
  border-right: solid gray 1px;
  justify-content: center;
  padding: 7px;
`;

const LogoImgWrapper = styled.div`
  width: 5.25rem;
  height: 1.5rem;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Navbar = () => {
  return (
    <Container>
      <Box>
        <LogoImgWrapper>
          <LogoImg src={BBCLogo} alt="CBB logo" />
        </LogoImgWrapper>
      </Box>
      {data.map((item) => (
        <Box key={item.id}>
          {item.icon}
          {item.id}
        </Box>
      ))}
    </Container>
  );
};

export default Navbar;
