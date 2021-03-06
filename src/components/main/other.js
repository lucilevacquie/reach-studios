import React from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const data = [
  {
    title: "Other services",
    links: [{ link: "Complaints" }],
  },
  {
    title: "Modern slavery statement",
    links: [{ link: "Read more" }],
  },
  {
    title: "The BBC around the UK",
    links: [
      { link: "Scotland" },
      { link: "ALBA" },
      { link: "Wales" },
      { link: "Cymru" },
      { link: "NI" },
    ],
  },
];

const Container = styled(Grid)`
  padding-left: 4rem;
  @media screen and (max-width: 1280px) {
    padding-left: 3rem;
  }
  @media screen and (max-width: 900px) {
    padding-left: 2rem;
  }
  @media screen and (max-width: 600px) {
    padding-left: 1rem;
  }
  a {
    padding-left: 2rem;
    color: black;
    font-weight: 700;
    :hover {
      color: rgb(0, 109, 239);
    }
    @media screen and (max-width: 600px) {
      padding-left: 1.5rem;
    }
  }
`;

const Other = () => {
  return (
    <Container container direction="column">
      {data.map((section) => {
        return (
          <Box key={section.title} display="flex" flexWrap="wrap" py={2}>
            <div>{section.title}</div>
            <Box>
              {section.links.map((item) => {
                return (
                  <a key={item.link} href="/">
                    {item.link}
                  </a>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Container>
  );
};

export default Other;
