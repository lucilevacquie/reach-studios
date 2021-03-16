import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const Box = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgb(186, 186, 186);
  border-left: 1px solid rgb(186, 186, 186);
  color: black;
  text-decoration: none;
  :hover {
    background-image: linear-gradient(white, white, white, black);
    cursor: pointer;
  }
`;

const BoxContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.05rem 0.875rem 0.05rem 0.875rem;
`;

const Text = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Search = () => {
  return (
    <Box>
      <BoxContent>
        <SearchIcon style={{ height: "2em" }} />
        <Text>Search</Text>
      </BoxContent>
    </Box>
  );
};

export default Search;
