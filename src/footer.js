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
`;

const Plan = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid lightgray;
  padding: 10px 2rem;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  a {
    color: lightgray;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Policies = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 2rem;
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
  padding: 10px 2rem;
`;

const Footer = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Footer;
