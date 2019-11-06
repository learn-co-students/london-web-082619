import React from "react";
import { Link } from "react-router-dom"
import Paths from "../helpers/Paths"

const PaintingListItem = ({ id, title, date, artist }) => {
  const { name } = artist
  return (
  <div className="item">
    <Link to={Paths.showPainting(id)}>
    <div className="content">
      <h2>{title}</h2>
      <em>{name} · {date}</em>
    </div>
    </Link>
  </div>
  );
}

export default PaintingListItem;