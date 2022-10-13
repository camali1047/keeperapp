import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [boolean, setBoolean] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function textClicked() {
    setBoolean((prev) => {
      return true;
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={boolean ? { visibility: "visible" } : { visibility: "hidden" }}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onClick={textClicked}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={boolean ? 3 : 1}
        />
        <Zoom in={boolean}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
