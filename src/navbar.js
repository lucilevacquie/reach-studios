import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getDataNavbar from "./dataNavbar";

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
  border-bottom: 1px solid rgb(186, 186, 186);
  justify-content: center;
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  padding: 0 2rem;
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

  const windowWidth = window.innerWidth;
  console.log(windowWidth);

  return (
    <Container>
      <BorderBottom>
        <Nav>
          <Logo />
          <SpecialLink />
          {data.map((item) => (
            <NavLink
              key={item.id}
              backgroundColor={item.backgroundColor}
              href={item.href}
              id={item.id}
            />
          ))}

          <NavButton
            onClick={() => setIsDropdownActive(!isDropdownActive)}
            backgroundColor={"black"}
          />
          <Search backgroundColor={"black"} href="/" />
        </Nav>
      </BorderBottom>

      {isDropdownActive && <Dropdown />}
    </Container>
  );
};

export default Navbar;
