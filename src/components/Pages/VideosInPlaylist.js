import React from "react";
import { useParams } from "react-router-dom";

import { StyledLink } from "../Link";
import ListItem from "../ListItem";
import { getVideosInPlaylist } from "../../helper";
import VideoPicker from "../VideoPicker";

export default function VideosInPlaylist() {
  let params = useParams();
  const initVideos = getVideosInPlaylist(params.name);
  const [selectedVideos, setSelectedVideos] = React.useState(
    initVideos.map(({ id }) => id)
  );

  return (
    <div>
      {selectedVideos.map((m, i) => (
        <span key={i}>{m.id}</span>
      ))}
      <div>
        <StyledLink to="/playlists">← Playlists</StyledLink>
      </div>
      <h1>Videos in playlist</h1>
      <ListItem items={window.videos.filter(v => selectedVideos.indexOf(v.id) !== -1)}></ListItem>
      <VideoPicker
        selectedVideos={selectedVideos}
        setSelectElements={setSelectedVideos}
      />
    </div>
  );
}
