import React from "react";
import styled from "styled-components";

export default function VideoPicker({
  selectedVideoIds,
  setSelectedVideoIds,
}: VideoPickerProps) {
  const handleClick = (id: number) => {
    const newSelectedVideos = [...selectedVideoIds];
    const index = newSelectedVideos.indexOf(id);
    if (index === -1) {
      newSelectedVideos.push(id);
    } else {
      newSelectedVideos.splice(index, 1);
    }

    setSelectedVideoIds(newSelectedVideos);
  };

  const isVideoSelected = (id: number) => selectedVideoIds.indexOf(id) !== -1;

  const videoSelectButtons = window.videos
    .sort((a, b) => a.id - b.id)
    .map((video) => (
      <Button
        selected={isVideoSelected(video.id)}
        key={video.id}
        onClick={() => handleClick(video.id)}
      >
        {video.id} {video.name}
      </Button>
    ));

  return (
    <>
      <h3>Select/De-select from clicking the buttons</h3>
      {videoSelectButtons}
    </>
  );
}

const Button = styled.button<ButtonProps>`
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  ${({ selected }) =>
    selected &&
    `
    background: lightgrey;
  `}
`;

interface ButtonProps {
  selected: boolean;
}

interface VideoPickerProps {
  selectedVideoIds: number[];
  setSelectedVideoIds: Function;
}
