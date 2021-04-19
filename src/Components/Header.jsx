import React from "react";

import styled from "styled-components";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {

  return (
    <header className="App-header">
      <NavBar>
        <Toolbar>
         <Typography>Unsplash Images</Typography>
        </Toolbar>
      </NavBar>
    </header>
  );
};

export default Header;

const NavBar = styled(AppBar)`
  background-color: #004d40;
  position: relative;
  .MuiToolbar-root{
  justify-content: center;
  }
`;
