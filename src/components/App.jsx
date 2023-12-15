import React, { useEffect, useState } from "react";
import AppHeader from "./Header";
import AppFooter from "./Footer";
import AppNote from "./Note";
import Keeper from "./Keeper";

const App = () => {
  const [noteStack, setNoteStack] = useState([]);
  const URL =
    "https://keeper-backend-production-6c3a.up.railway.app/api/notes/";
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setNoteStack(data))
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  const handleNewNote = async (noteContent) => {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(noteContent)
    });
    const newNote = await response.json();
    setNoteStack(noteStack.concat(newNote));
  };

  const handleNoteDeletion = async (noteId) => {
    await fetch(URL + `?id=${noteId}`, {
      method: "DELETE"
    });
    setNoteStack(noteStack.filter((note) => note._id !== noteId));
  };

  return (
    <div className="app-main">
      <AppHeader />
      <Keeper onEntrySubmit={handleNewNote} />
      {noteStack.map((singleNote, idx) => (
        <AppNote
          key={singleNote._id}
          id={singleNote._id}
          title={singleNote.title}
          content={singleNote.body}
          onDelete={handleNoteDeletion}
        />
      ))}
      <AppFooter />
    </div>
  );
};

export default App;
