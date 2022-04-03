import React from "react";
import { useState } from "react";
import { useNote } from "../../note-context";
import { v4 as uuid } from "uuid";

export default function Main() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("");
  const { state, dispatch } = useNote();

  console.log(title, content);
  function clickHandler() {
    dispatch({
      type: "ADD_NOTES",
      payload: { id: uuid(), title, content, label, date: new Date() },
    });
    dispatch({ type: "ADD_LABEL" });
    setTitle("");
    setContent("");
    setLabel("");
  }

  return (
    <main className="typora-main">
      <div className="search-box-container">
        <div className="search-box">
          <input
            className="search-input"
            type="text"
            name="name"
            placeholder="search"
          />
          <button className="search-button">
            <i class="fas fa-sliders-h"></i>
          </button>
        </div>
      </div>

      <div className="typora-note">
        <div className="note-title-and-pin">
          <textarea
            className="note-title"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div>
            <i className="fas fa-thumbtack"></i>
          </div>
        </div>
        <textarea
          className="note-content"
          placeholder="Content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <div className="note-lower-date-and-icons">
          <div className="note-date-icons">Date</div>
          <div className="note-lower-icons">
            <input
              className="note-label-ip"
              type="text"
              placeholder="Label 1/2/3"
              value={label}
              onChange={(e) => {
                setLabel(e.target.value);
              }}
            />
            <button className="adding-btn" onClick={clickHandler}>
              +
            </button>
          </div>
        </div>
      </div>

      {state.notes.map((note) => (
        <div className="typora-note" key={note.id}>
          <div className="note-title-and-pin">
            <textarea
              className="note-title"
              placeholder="Title"
              value={note.title}
            />
            <div>
              <i
                className="fas fa-thumbtack"
                onClick={() => {
                  dispatch({ type: "ADD_TO_PIN", payload: note });
                  dispatch({ type: "DELETE_NOTES", payload: note.id });
                }}
              ></i>
            </div>
          </div>

          <textarea
            className="note-content"
            placeholder="Content"
            value={note.content}
          />

          <div className="note-lower-date-and-icons">
            <div className="note-date-icons">
              {new Date(note.date).getDate()}/
              {new Date(note.date).getUTCMonth() + 1}/
              {new Date(note.date).getFullYear()}
            </div>
            <div className="note-lower-icons">
              <input className="note-label-op" type="text" value={note.label} />
              <i className="fas fa-palette"></i>
              <i className="fas fa-tag"></i>
              <i
                className="fas fa-archive"
                onClick={() => {
                  dispatch({ type: "DELETE_NOTES", payload: note.id });
                  dispatch({ type: "ADD_TO_ARCHIVE", payload: note });
                }}
              ></i>
              <i
                className="fas fa-trash-alt"
                onClick={() =>
                  dispatch({ type: "DELETE_NOTES", payload: note.id })
                }
              ></i>
            </div>
          </div>
        </div>
      ))}

      {/* pin */}
      <div id="note-category">PINNED</div>
      {state.pinned.map((note) => (
        <div className="typora-note" key={note.id}>
          <div className="note-title-and-pin">
            <textarea
              className="note-title"
              placeholder="Title"
              value={note.title}
            />
            <div>
              <i
                className="fas fa-thumbtack"
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_PINNED", payload: note.id });
                  dispatch({ type: "ADD_NOTES", payload: note });
                }}
              ></i>
            </div>
          </div>
          <textarea
            className="note-content"
            placeholder="Content"
            value={note.content}
          />
          <div className="note-lower-date-and-icons">
            <div className="note-date-icons">
              {new Date(note.date).getDate()}/
              {new Date(note.date).getUTCMonth() + 1}/
              {new Date(note.date).getFullYear()}
            </div>
            <div className="note-lower-icons">
              <input className="note-label-op" type="text" value={note.label} />
              <i className="fas fa-palette"></i>
              <i className="fas fa-tag"></i>
              <i className="fas fa-archive"></i>
              <i
                className="fas fa-trash-alt"
                onClick={() =>
                  dispatch({ type: "DELETE_NOTES", payload: note.id })
                }
              ></i>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
