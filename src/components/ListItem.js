import React from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

export default function ListItem({ items, setItems, hasRemoveButton }) {
  const handleRemove = (id) => {
    setItems(items.filter((video) => video.id !== id));
  };

  return (
    <ul>
      {items?.map(({ id, name, description }) => (
        <li key={id}>
          <span data-tip={description}>{name}</span>
          {hasRemoveButton && (
            <Button onClick={() => handleRemove(id)}>Remove</Button>
          )}
          <ReactTooltip />
        </li>
      ))}
    </ul>
  );
}

const Button = styled.button`
  margin-left: 5px;
`;
