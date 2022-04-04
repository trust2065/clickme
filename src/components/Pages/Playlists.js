import React from "react";
import ReactTooltip from "react-tooltip";

import { StyledLink } from "../Link";

export default function Playlists() {
  const playlists = window.playlists.map(({ id, name, description }) => (
    <li key={id}>
      <StyledLink to={`videosInPlaylist/${name}`}>
        <span data-tip={description}>{name}</span>
      </StyledLink>
      <ReactTooltip />
    </li>
  ));

  return (
    <div>
      <div>
        <StyledLink to="/">← Home</StyledLink>
      </div>
      <h1>Playlists</h1>
      <ul>{playlists}</ul>
    </div>
  );
}
