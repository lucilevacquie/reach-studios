import React from "react";
import styled from "styled-components";
import dataNav from "./dataNavbar";

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
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  background-color: rgb(40, 40, 40);
  color: lightgray;
`;

const Wrapper = styled.div`
  max-width: 80rem;
  margin: auto;
  @media screen and (max-width: 1280px) {
    max-width: 63rem;
  }
  @media screen and (max-width: 900px) {
    max-width: 100%;
    margin: 0;
  }
`;

const Plan = styled.div`
  border-bottom: 1px solid lightgray;
  font-weight: 700;
`;

const columnWidth = "5.625rem";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 8rem);
  grid-column-gap: 2.5rem;
  padding-left: 1rem;
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
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(7, ${columnWidth});
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(5, ${columnWidth});
  }
  @media screen and (max-width: 642px) {
    grid-template-columns: repeat(4, ${columnWidth});
  }
  @media screen and (max-width: 422px) {
    grid-template-columns: repeat(3, ${columnWidth});
  }
  @media screen and (max-width: 334px) {
    grid-template-columns: repeat(2, ${columnWidth});
  }
`;

const Policies = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 700;
  padding: 10px 15px;
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
  @media screen and (max-width: 900px) {
    padding: 10px 1rem;
  }
`;

const Final = styled.div`
  padding: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
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
        <Policies>
          {PolicyLinks.map((link) => {
            return (
              <div key={link.id}>
                <a href={link.href}>{link.id}</a>
              </div>
            );
          })}
        </Policies>
        <Final>
          © 2021 BBC. The BBC is not responsible for the content of external
          sites.
        </Final>
      </Wrapper>
    </Container>
  );
};

export default Footer;
