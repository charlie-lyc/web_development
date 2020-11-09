import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    // 1. Expanding UI
    unexpand();
  }
  // 1. Expanding UI
  const [isExpanded, setExpanded] = useState(false);
  function expand() {
    setExpanded(true);
  }
  function unexpand() {
    setExpanded(false);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          // 1. Expanding UI
          onClick={expand}
        />
        {isExpanded && (
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
            // 1. Expanding UI
            onMouseOut={unexpand}
            // 2. Expanding UI
            // rows={isExpanded ? 3 : 1}
          />
        )}
        {/* <button onClick={submitNote}>Add</button> */}
        {/* <Zoom in={true}> */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
