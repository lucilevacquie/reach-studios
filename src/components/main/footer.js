import React from "react";
import styled from "styled-components";
import dataNav from "../../data/dataNavbar";
import Box from "@material-ui/core/box";

const PolicyLinks = [
  {
    id: "Terms of Use",
    href: "/",
  },
  {
    id: "About the BBC",
    href: "/",
  },
  {
    id: "Privacy Policy",
    href: "/",
  },
  {
    id: "Cookies",
    href: "/",
  },
  {
    id: "Accessibility Help",
    href: "/",
  },
  {
    id: "Parental Guidance",
    href: "/",
  },
  {
    id: "Contact the BBC",
    href: "/",
  },
  {
    id: "Get Personalised Newsletters",
    href: "/",
  },
  {
    id: "Why you can trust the BBC",
    href: "/",
  },
];

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  background-color: rgb(40, 40, 40);
  padding: 1rem 3rem;
  color: lightgray;
  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
`;

const Plan = styled.div`
  border-bottom: 1px solid lightgray;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 2.5rem;
  margin: auto;
  div {
    padding: 0.75rem 0px;
  }
  a {
    color: lightgray;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 334px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Policies = styled(Box)`
  font-weight: 700;
  padding: 1rem 0;
  div {
    padding: 5px 20px 10px 0;
    a {
      color: lightgray;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Plan>
        <Grid>
          {dataNav.map((navlink) => {
            return (
              <div key={navlink.id}>
                <a href={navlink.href}>{navlink.id}</a>
              </div>
            );
          })}
        </Grid>
      </Plan>
      <Policies display="flex" flexWrap="wrap">
        {PolicyLinks.map((link) => {
          return (
            <div key={link.id}>
              <a href={link.href}>{link.id}</a>
            </div>
          );
        })}
      </Policies>
      <div>
        © 2021 BBC. The BBC is not responsible for the content of external
        sites.
      </div>
    </Container>
  );
};

export default Footer;
