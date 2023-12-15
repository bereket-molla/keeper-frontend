import React from "react";

const Note = ({ id, title, content, onDelete }) => {
  const triggerDelete = () => onDelete(id);

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={triggerDelete}>DELETE</button>
    </div>
  );
};

export default Note;
