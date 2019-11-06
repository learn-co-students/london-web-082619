import React from "react";
import PaintingListItem from "./PaintingListItem";

const PaintingsList = ({ paintings, setSelectedId }) => (
  <div className="ui narrow container">
    <div className="ui relaxed celled list">
      {paintings.map(painting => <PaintingListItem key={painting.id} {...{...painting, setSelectedId }}/> )}
    </div>
  </div>
)

export default PaintingsList;
