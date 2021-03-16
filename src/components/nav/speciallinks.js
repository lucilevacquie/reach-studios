import React from "react";
import styled from "styled-components";
import Box from "@material-ui/core/box";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Hidden from "@material-ui/core/hidden";

const Link = styled(Box)`
  border-right: 1px solid rgb(186, 186, 186);
  :hover {
    cursor: pointer;
    box-shadow: 0px -15px 0px -9px blue inset;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const SpecialLink = () => {
  return (
    <>
      <Link display="flex" alignItems="center" px={2}>
        <AccountCircleIcon />
        <Hidden smDown>
          <a href="/">Sign in</a>
        </Hidden>
      </Link>
      <Link display="flex" alignItems="center" px={2}>
        <a href="/">
          <NotificationsIcon />
        </a>
      </Link>
    </>
  );
};

export default SpecialLink;
