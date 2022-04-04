import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import { StyledLink } from "../Link";
import VideoPicker from "../VideoPicker";
import Separator from "../Separator";
import type { Playlist } from "../../types";

export default function Playlists() {
  const [playlists, setPlaylists] = useState<Playlist[]>(window.playlists);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [selectedVideoIds, setSelectedVideoIds] = React.useState<number[]>([]);

  const handleRemove = (id: number) => {
    // todo: are you sure dialog?
    setPlaylists(playlists.filter((playlist) => playlist.id !== id));
  };

  const playlistItems = playlists.map(({ id, name, description, videoIds }) => (
    <li key={id}>
      <StyledLink to={`videosInPlaylist/${name}`}>
        <span data-tip={description}>{name}</span>
        <div>
          <small>{videoIds.join(", ")}</small>
        </div>
      </StyledLink>
      <ReactTooltip />
      <Button onClick={() => handleRemove(id)}>Remove</Button>
    </li>
  ));

  const handleAddPlaylist = () => {
    if (!newPlaylistName) {
      // todo: better dialog
      alert("need a name");
      return;
    }

    // todo: check for duplicates
    // todo: persist the data in sessionStorage
    const newPlaylist: Playlist = {
      id: parseInt(uuid()),
      name: newPlaylistName,
      // todo: textarea for description
      description: "",
      dateCreated: new Date().toISOString(),
      videoIds: selectedVideoIds,
    };

    setPlaylists([...playlists, newPlaylist]);
    cleanUp();
  };

  const cleanUp = () => {
    setNewPlaylistName("");
    setSelectedVideoIds([]);
  };

  return (
    <div>
      <div>
        <StyledLink to="/">← Home</StyledLink>
      </div>
      <h1>Playlists</h1>
      <ul>{playlistItems}</ul>
      <hr />
      <Separator>
        <Label htmlFor="new_playlist_name">New playlist name:</Label>
      </Separator>
      <Input
        onChange={(e) => setNewPlaylistName(e.target.value)}
        type="text"
        value={newPlaylistName}
        id="new_playlist_name"
      />
      <Separator>
        <label htmlFor="selectedVideos">Selected Videos:</label>
      </Separator>
      {selectedVideoIds?.map((videoId, i) => (
        <span key={videoId}>
          <span>{videoId}</span>
          {i !== selectedVideoIds.length - 1 && <span>, </span>}
        </span>
      ))}
      <Separator>
        <button onClick={handleAddPlaylist}>Add</button>
      </Separator>
      <VideoPicker
        selectedVideoIds={selectedVideoIds}
        setSelectedVideoIds={setSelectedVideoIds}
      />
    </div>
  );
}

const Label = styled.label`
  margin-right: 5px;
`;

const Input = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 12px;
`;
