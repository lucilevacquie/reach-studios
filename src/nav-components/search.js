import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const Box = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgb(186, 186, 186);
  justify-content: center;
  :hover {
    background-image: linear-gradient(white, white, white, black);
    cursor: pointer;
  }
`;

const BoxContent = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0.05rem 0.875rem 0.05rem 0.875rem;
`;

const Search = () => {
  return (
    <Box>
      <BoxContent>
        <SearchIcon style={{ height: "2em" }} />
        <div>Search</div>
      </BoxContent>
    </Box>
  );
};

export default Search;
