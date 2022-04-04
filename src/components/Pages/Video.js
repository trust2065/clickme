import React from "react";

import { StyledLink } from "../Link";
import ListItem from "../ListItem";

export default function Video() {
  return (
    <div>
      <div>
        <StyledLink to="/">← Home</StyledLink>
      </div>
      <h1>Videos</h1>
      <ListItem items={window.videos}></ListItem>
    </div>
  );
}
