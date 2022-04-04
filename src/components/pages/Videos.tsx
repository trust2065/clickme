import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import { StyledLink } from "../Link";
import ListItem from "../ListItem";
import Separator from "../Separator";

export default function Videos() {
  const [videos, setVideos] = useState(window.videos);
  const [videoName, setVideoName] = useState("");

  const handleAddVideo = () => {
    // todo: duplicate check
    setVideos([
      ...videos,
      {
        name: videoName,
        id: parseInt(uuid()),
        dateCreated: new Date().toISOString(),
      },
    ]);
  };

  return (
    <div>
      <div>
        <StyledLink to="/">← Home</StyledLink>
      </div>
      <h1>Videos</h1>
      <Separator>
        <Label htmlFor="new_video_name">New video name:</Label>
      </Separator>
      <Input
        onChange={(e) => setVideoName(e.target.value)}
        type="text"
        id="new_video_name"
      />
      <div>
        <button onClick={handleAddVideo}>Add new video</button>
      </div>
      <ListItem
        items={videos}
        setItems={setVideos}
        hasRemoveButton={true}
      ></ListItem>
    </div>
  );
}

const Label = styled.label`
  margin-right: 5px;
`;

const Input = styled.input`
  margin-right: 5px;
`;
