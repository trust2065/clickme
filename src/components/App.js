import React from "react";
import styled from "styled-components";

import { StyledLink } from "./Link";

function App() {
  return (
    <nav>
      <ol>
        <ListItem>
          <StyledLink to="/video">Video</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/playlist">Playlist</StyledLink>
        </ListItem>
      </ol>
    </nav>
  );
}

export default App;

const ListItem = styled.li`
  display: inline;
  list-style-type: none;
  margin: 0;
  padding: 20px;
  width: 20px;
`;
