import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
// import SearchIcon from "@material-ui/icons/Search";

const Box = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgb(186, 186, 186);
  justify-content: center;
  :hover {
    background-image: linear-gradient(white, white, white, blue);
    cursor: pointer;
  }
`;

const BoxContent = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0.05rem ${(props) => (props.paddingRight ? "5rem" : "0.875rem")}
    0.05rem 0.875rem;
`;

const SignInContent = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0.05rem 5rem 0.05rem 0.875rem;
`;

const SpecialLink = () => {
  return (
    <>
      <Box href="/">
        <SignInContent>
          <AccountCircleIcon style={{ height: "2em" }} />
          <div>Sign in</div>
        </SignInContent>
      </Box>
      <Box href="/">
        <BoxContent>
          <NotificationsIcon style={{ height: "2em" }} />
        </BoxContent>
      </Box>
    </>
  );
};

export default SpecialLink;
