import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getDataNavbar from "./dataNavbar";
import BBCLogo from "./assets/BBC_logo.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

const Container = styled.div`
  display: grid;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
`;

const BorderBottom = styled.div`
  border-bottom: 1px solid rgb(186, 186, 186);
`;

const Nav = styled.nav`
  display: flex;
  padding: 0 2rem;
  margin: auto;
`;

const SignInContent = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0.05rem 5rem 0.05rem 0.875rem;
`;

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
  padding: 0.05rem ${(props) => (props.paddingRight ? "5rem" : "0.875rem")}
    0.05rem 0.875rem;
`;

const LogoImgWrapper = styled.div`
  width: 5.25rem;
  height: 1.5rem;
  padding: 0.5rem 1rem;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const NavButton = styled.button`
  border: none;
  border-right: 1px solid rgb(186, 186, 186);
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
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

const NavButtonContent = styled.div`
  display: flex;
  align-items: center;
  div {
    font-size: 1rem;
  }
`;

const Dropdown = styled.div`
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

const Navbar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await getDataNavbar();
      setData(response);
    };
    fetch();
  }, []);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return (
    <Container>
      <BorderBottom>
        <Nav>
          <Box>
            <LogoImgWrapper>
              <LogoImg src={BBCLogo} alt="CBB logo" />
            </LogoImgWrapper>
          </Box>
          <Box backgroundColor={"blue"} href="/">
            <SignInContent>
              <AccountCircleIcon style={{ height: "2em" }} />
              <div>Sign in</div>
            </SignInContent>
          </Box>
          <Box backgroundColor={"blue"} href="/">
            <BoxContent>
              <NotificationsIcon style={{ height: "2em" }} />
            </BoxContent>
          </Box>
          {data.map((item) => (
            <Box
              key={item.id}
              backgroundColor={item.backgroundColor}
              href={item.href}
            >
              <BoxContent paddingRight={item.paddingRight}>
                {item.icon}
                {item.id}
              </BoxContent>
            </Box>
          ))}
          <NavButton
            onClick={() => setIsDropdownActive(!isDropdownActive)}
            backgroundColor={"black"}
          >
            <NavButtonContent>
              <div>More</div>
              <ArrowDropDownIcon style={{ height: "2em" }} />
            </NavButtonContent>
          </NavButton>
          <NavButton backgroundColor={"black"}>
            <NavButtonContent>
              <SearchIcon style={{ height: "2em" }} />
              <div>Search</div>
            </NavButtonContent>
          </NavButton>
        </Nav>
      </BorderBottom>
      {isDropdownActive && (
        <Dropdown>
          <Links>
            <Link>
              <a href="/">Blablabla</a>
            </Link>
            <Link>
              <a href="/">Blablabla</a>
            </Link>
          </Links>
          <CloseButton onClick={() => setIsDropdownActive(!isDropdownActive)}>
            <CloseIcon />
          </CloseButton>
        </Dropdown>
      )}
    </Container>
  );
};

export default Navbar;
