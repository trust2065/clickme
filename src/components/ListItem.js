import React from "react";
import ReactTooltip from "react-tooltip";

export default function ListItem({ items }) {
  return (
    <ul>
      {items.map(({ id, name, description }) => (
        <li key={id}>
          <span data-tip={description}>{name}</span>
          <ReactTooltip />
        </li>
      ))}
    </ul>
  );
}
