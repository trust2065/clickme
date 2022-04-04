import React from "react";
import { useParams } from "react-router-dom";

import { StyledLink } from "../Link";
import ListItem from "../ListItem";
import { getVideosInPlaylist } from "../../helper";
import VideoPicker from "../VideoPicker";

export default function VideosInPlaylist() {
  let params = useParams();
  const initVideoIds = getVideosInPlaylist(params.name).map((v) => v.id);
  const [selectedVideoIds, setSelectedVideoIds] = React.useState(initVideoIds);

  return (
    <div>
      <div>
        <StyledLink to="/playlists">← Playlists</StyledLink>
      </div>
      <h1>Videos in playlist</h1>
      <ListItem
        items={window.videos.filter(
          (v) => selectedVideoIds.indexOf(v.id) !== -1
        )}
      />
      <VideoPicker
        selectedVideoIds={selectedVideoIds}
        setSelectedVideoIds={setSelectedVideoIds}
      />
    </div>
  );
}
