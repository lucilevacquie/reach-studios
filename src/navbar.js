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
    icon: <AccountCircleIcon style={{ height: "0.8em" }} />,
    backgroundColor: "blue",
  },
  {
    id: "",
    src: "",
    href: "/",
    icon: <NotificationsIcon style={{ height: "0.8em" }} />,
    backgroundColor: "blue",
  },
  {
    id: "Home",
    src: "",
    href: "/",
    backgroundColor: "navy",
  },
  {
    id: "News",
    src: "",
    href: "/",
    backgroundColor: "red",
  },
  {
    id: "Sport",
    src: "",
    href: "/",
    backgroundColor: "gold",
  },
  {
    id: "Weather",
    src: "",
    href: "/",
    backgroundColor: "lightblue",
  },
  {
    id: "iPlayer",
    src: "",
    href: "/",
    backgroundColor: "pink",
  },
  {
    id: "Sounds",
    src: "",
    href: "/",
    backgroundColor: "orange",
  },
  {
    id: "CBBC",
    src: "",
    href: "/",
    backgroundColor: "green",
  },
  {
    id: "CBeebies",
    src: "",
    href: "/",
    backgroundColor: "yellow",
  },
  {
    id: "More",
    src: "",
    href: "/",
    icon: <ArrowDropDownIcon style={{ height: "0.8em" }} />,
    backgroundColor: "black",
  },
  {
    id: "Search",
    src: "",
    href: "/",
    icon: <SearchIcon style={{ height: "0.8em" }} />,
    backgroundColor: "black",
  },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(14, auto);
  border-bottom: solid gray 1px;
`;

const Box = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: solid gray 1px;
  justify-content: center;
  :hover {
    background-color: ${(props) => props.backgroundColor};
    cursor: pointer;
  }
`;

const Color = styled.div`
  display: flex;
  width: 100%;
  height: 4px;
`;

const IconAndTitle = styled.div`
  align-items: end;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: white;
  padding-top: 10px;
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
        <Box key={item.id} backgroundColor={item.backgroundColor}>
          <IconAndTitle>
            {item.icon}
            {item.id}
          </IconAndTitle>
          <Color />
        </Box>
      ))}
    </Container>
  );
};

export default Navbar;
