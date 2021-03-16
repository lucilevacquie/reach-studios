import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import dataNavbar from "./dataNavbar";

import NavLink from "./nav-components/navlink";
import NavButton from "./nav-components/navbutton";
import Logo from "./nav-components/logo";
import SpecialLink from "./nav-components/speciallinks";
import Search from "./nav-components/search";
import Dropdown from "./nav-components/dropdown";

const Container = styled.div`
  display: grid;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
`;

const BorderBottom = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(186, 186, 186);
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  padding: 0 2rem;
  @media screen and (max-width: 600px) {
    padding: 0rem 0.5rem;
  }
`;

const MapLinks = styled.div`
  display: flex;
  width: auto;
`;

const Navbar = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const navLinks = useRef("");
  const navbar = useRef("");

  const arrayNavbar = dataNavbar;

  const [arrayDropdown, setArrayDropdown] = useState([]);

  useEffect(() => {
    const pushToDropdown = () => {
      const windowWidth = window.innerWidth;
      const navbarWidth = navbar.current.clientWidth;

      if (windowWidth < navbarWidth) {
        //take the last element of the navbar array
        //and store it in a variable
        const link = arrayNavbar.pop();
        if (link) {
          setArrayDropdown((current) => [...current, link]);
        }
        //add it in the dropdown array
      }
    };
    pushToDropdown();
  }, [arrayNavbar, setArrayDropdown, arrayDropdown]);

  return (
    <Container>
      <BorderBottom ref={navbar}>
        <Nav>
          <Logo />
          <SpecialLink />
          <MapLinks ref={navLinks}>
            {dataNavbar.map((item) => (
              <NavLink
                key={item.id}
                backgroundColor={item.backgroundColor}
                href={item.href}
                id={item.id}
              />
            ))}
          </MapLinks>

          <NavButton
            onClick={() => setIsDropdownActive(!isDropdownActive)}
            backgroundColor={"black"}
          />
          <Search backgroundColor={"black"} href="/" />
        </Nav>
      </BorderBottom>

      {isDropdownActive && (
        <Dropdown
          onClick={() => setIsDropdownActive(!isDropdownActive)}
          array={arrayDropdown}
        />
      )}
    </Container>
  );
};

export default Navbar;
