import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/box";

const Container = styled(Box)`
  border-right: 1px solid rgb(186, 186, 186);
  :hover {
    cursor: pointer;
    box-shadow: 0px -15px 0px -9px black inset;
  }
`;

const Search = () => {
  return (
    <Container display="flex" alignItems="center" px={2}>
      <SearchIcon />
      Search
    </Container>
  );
};

export default Search;
