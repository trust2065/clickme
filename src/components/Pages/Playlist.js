import React from "react";

import { StyledLink } from "../Link";
import ListItem from "../ListItem";

export default function Playlist() {
  return (
    <div>
      <div>
        <StyledLink to="/">← Home</StyledLink>
      </div>
      <h1>Playlists</h1>
      <ListItem items={window.playlists}></ListItem>
    </div>
  );
}
