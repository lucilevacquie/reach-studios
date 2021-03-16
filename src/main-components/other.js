import React from "react";
import styled from "styled-components";

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

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 33%);
  padding-right: 0 4rem;
  @media screen and (max-width: 1280px) {
    padding: 0 3rem;
  }
  @media screen and (max-width: 900px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const Section = styled.div`
  display: flex;
  padding: 1rem 0;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Links = styled.div`
  @media screen and (max-width: 600px) {
    padding-top: 1rem;
  }
`;

const Link = styled.a`
  padding-left: 2rem;
  color: black;
  font-weight: 700;
  :hover {
    color: rgb(0, 109, 239);
  }
  @media screen and (max-width: 600px) {
    padding-right: 1.5rem;
    padding-left: 0;
  }
`;

const Other = () => {
  return (
    <div>
      <Grid>
        {data.map((section) => {
          return (
            <Section key={section.title}>
              <div>{section.title}</div>
              <Links>
                {section.links.map((item) => {
                  return (
                    <Link key={item.link} href="/">
                      {item.link}
                    </Link>
                  );
                })}
              </Links>
            </Section>
          );
        })}
      </Grid>
    </div>
  );
};

export default Other;
