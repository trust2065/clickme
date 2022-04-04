import React from "react";

import { useParams } from "react-router-dom";

import { StyledLink } from "../Link";
import ListItem from "../ListItem";
import {getVideosInPlaylist} from '../../helper';

export default function VideosInPlaylist() {
  let params = useParams();
  const items = getVideosInPlaylist(params.name);

  return (
    <div>
      <div>
        <StyledLink to="/playlists">← Playlists</StyledLink>
      </div>
      <h1>Videos in playlist</h1>
      <ListItem items={items}></ListItem>
    </div>
  );
}
