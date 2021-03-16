import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Box = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgb(186, 186, 186);
  color: black;
  text-decoration: none;
  :hover {
    background-image: linear-gradient(white, white, white, blue);
    cursor: pointer;
  }
`;

const BoxContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.05rem ${(props) => (props.paddingRight ? "5rem" : "0.875rem")}
    0.05rem 0.875rem;
`;

const SignInContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.05rem 5rem 0.05rem 0.875rem;
  @media screen and (max-width: 1008px) {
    padding: 1rem;
  }
  div {
    @media screen and (max-width: 1008px) {
      display: none;
    }
  }
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
