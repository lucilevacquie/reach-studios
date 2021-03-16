import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import dataNavbar from "../../data/dataNavbar";
import Box from "@material-ui/core/box";

import NavLink from "./navlink";
import MoreButton from "./morebutton";
import Logo from "./logo";
import SpecialLink from "./speciallinks";
import Search from "./search";
import Dropdown from "./dropdown";

const Nav = styled(Box)`
  border-bottom: 1px solid rgb(186, 186, 186);
`;

const Navbar = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

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
    <Box display="flex" flexDirection="column" justifyContent="center">
      <div ref={navbar}>
        <Nav display="flex" px={2}>
          <Logo />
          <SpecialLink />
          {dataNavbar.map((item) => (
            <NavLink
              key={item.id}
              backgroundColor={item.backgroundColor}
              href={item.href}
              id={item.id}
            />
          ))}

          <MoreButton
            onClick={() => setIsDropdownActive(!isDropdownActive)}
            backgroundColor={"black"}
          />
          <Search backgroundColor={"black"} href="/" />
        </Nav>
      </div>

      {isDropdownActive && (
        <Dropdown
          onClick={() => setIsDropdownActive(!isDropdownActive)}
          array={arrayDropdown}
        />
      )}
    </Box>
  );
};

export default Navbar;
