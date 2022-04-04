import React from "react";
import styled from "styled-components";

import { StyledLink } from "./Link";

function App() {
  return (
    <nav>
      <ol>
        <NavItem>
          <StyledLink to="/videos">Videos</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/playlists">Playlists</StyledLink>
        </NavItem>
      </ol>
    </nav>
  );
}

export default App;

const NavItem = styled.li`
  display: inline;
  list-style-type: none;
  margin: 0;
  padding: 20px;
  width: 20px;
`;
