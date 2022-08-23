import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNote } from "../../note-context";

export default function NoteCard({ note }) {
  const [outTitle, setOutTitle] = useState(note.title);
  const [outContent, setOutContent] = useState(note.content);
  const [outLabel, setOutLabel] = useState(note.label);
  const [color, setColor] = useState(note.color);
  const { state, dispatch } = useNote();

  async function updateNoteHandler() {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        `/api/notes/${note._id}`,
        {
          note: {
            ...note,
            title: outTitle,
            content: outContent,
            label: outLabel,
            color: color,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        const responseTwo = await axios.get("/api/notes", {
          headers: {
            authorization: token,
          },
        });

        if (responseTwo.status === 200) {
          dispatch({ type: "ADD_NOTES", payload: responseTwo.data.notes });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function trashNoteHandler(toTrashNote) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        `/api/notes/trash/${toTrashNote._id}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        const responseTwo = await axios.get("/api/notes", {
          headers: {
            authorization: token,
          },
        });

        if (responseTwo.status === 200) {
          dispatch({ type: "ADD_NOTES", payload: responseTwo.data.notes });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function archiveHandler() {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        `/api/notes/archives/${note._id}`,
        {
          note: note,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 201) {
        const response = await axios.get("/api/notes", {
          headers: {
            authorization: token,
          },
        });

        if (response.status === 200) {
          dispatch({ type: "ADD_NOTES", payload: response.data.notes });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="typora-note output-display"
      key={note._id}
      style={{ backgroundColor: color }}
    >
      <div className="note-title-and-pin">
        <input
          style={{ backgroundColor: color }}
          className="title-op"
          value={outTitle}
          onChange={(e) => setOutTitle(e.target.value)}
          onBlur={updateNoteHandler}
        />
        <div>
          <i
            className="fas fa-thumbtack"
            onClick={() => {
              dispatch({ type: "ADD_TO_PIN", payload: note });
            }}
          ></i>
        </div>
      </div>

      <textarea
        style={{ backgroundColor: color }}
        className="content-op"
        aria-setsize="50"
        value={outContent}
        onChange={(e) => setOutContent(e.target.value)}
        onBlur={updateNoteHandler}
      ></textarea>

      <div className="note-lower-date-and-icons">
        <div className="note-date-icons">
          {new Date(note.date).getDate()}/{new Date(note.date).getMonth() + 1}/
          {new Date(note.date).getFullYear()}
          <small>
            {new Date(note.date).getHours()}:
            {String(new Date(note.date).getMinutes()).padStart(2, "0")}:
            {String(new Date(note.date).getSeconds()).padStart(2, "0")}
          </small>
        </div>

        <div className="note-lower-icons">
          <input
            className="note-label-op"
            value={outLabel}
            onChange={(e) => setOutLabel(e.target.value)}
            onBlur={updateNoteHandler}
          />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            onBlur={updateNoteHandler}
          />

          <i className="fas fa-tag"></i>

          <i className="fas fa-archive" onClick={() => archiveHandler()}></i>
          <i
            className="fas fa-trash-alt"
            onClick={() => trashNoteHandler(note)}
          ></i>
        </div>
      </div>
    </div>
  );
}
