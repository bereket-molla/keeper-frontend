import React, { useState } from "react";

const NoteTaker = ({ onEntrySubmit }) => {
  const [entryData, setEntryData] = useState({ title: "", body: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEntryData((existringEntry) =>
      Object.assign({}, existringEntry, { [name]: value })
    );
  };

  const addNote = (e) => {
    e.preventDefault();
    onEntrySubmit(entryData);
    setEntryData({ title: "", body: "" });
  };

  return (
    <section>
      <form>
        <input
          type="text"
          name="title"
          value={entryData.title}
          placeholder="Title"
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          value={entryData.body}
          placeholder="Your note here..."
          onChange={handleInputChange}
        />
        <button type="submit" onClick={addNote}>
          Add
        </button>
      </form>
    </section>
  );
};

export default NoteTaker;
