import React from "react";
import styled from "styled-components";
import data from "./dataNavbar";

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
  background-color: black;
  color: lightgray;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;

const Wrapper = styled.div`
  max-width: 80rem;
  margin: auto;
  @media screen and (max-width: 1280px) {
    max-width: 63rem;
  }
`;

const Plan = styled.div`
  border-bottom: 1px solid lightgray;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 8rem);
  grid-column-gap: 2.5rem;
  justify-content: center;
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
    grid-template-columns: repeat(7, 5.625rem);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(5, 5.625rem);
  }
  @media screen and (max-width: 642px) {
    grid-template-columns: repeat(4, 5.625rem);
  }
  @media screen and (max-width: 422px) {
    grid-template-columns: repeat(3, 5.625rem);
  }
  @media screen and (max-width: 334px) {
    grid-template-columns: repeat(2, 5.625rem);
  }
`;

const Policies = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 6rem;
  font-weight: 700;
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

const Final = styled.div`
  padding: 10px 6rem;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Plan>
          <Grid>
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <a href={item.href}>{item.id}</a>
                </div>
              );
            })}
          </Grid>
        </Plan>
        <Policies>
          {PolicyLinks.map((item) => {
            return (
              <div>
                <a href={item.href}>{item.id}</a>
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
