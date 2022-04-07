import React from "react";
import { useNote } from "../../note-context";

export default function TrashMain() {
  const { state, dispatch } = useNote();
  return (
    <main className="typora-main">
      {state.trash.map((note) => (
        <div
          className="typora-note output-display"
          key={note.id}
          style={{ backgroundColor: state.color }}
        >
          <div className="note-title-and-pin">
            <div className="title-op">{note.title}</div>
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

          <div className="content-op">{note.content}</div>
          <div className="note-lower-date-and-icons">
            <div className="note-date-icons">
              {new Date(note.date).getDate()}/
              {new Date(note.date).getUTCMonth() + 1}/
              {new Date(note.date).getFullYear()}
              <small>
                {new Date(note.date).getHours()}:
                {new Date(note.date).getMinutes()}:
                {new Date(note.date).getSeconds()}
              </small>
            </div>
            <div className="note-lower-icons">
              <div className="note-label-op"> {note.label}</div>
              {/* <i className="fas fa-palette"></i> */}
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
                onClick={() => {
                  dispatch({ type: "DELETE_FROM_TRASH", payload: note.id });
                }}
              ></i>
            </div>
          </div>
        </div>
      ))}

      {/* <div id="note-category">PINNED</div> */}
      {/* <div className="typora-note">
        <div className="note-title-and-pin">
          <input className="note-title" type="text" placeholder="Title" />
          <div>
            <i className="fas fa-thumbtack"></i>
          </div>
        </div>
        <input className="note-content" type="text" placeholder="Content" />
        <div className="note-lower-date-and-icons">
          <div className="note-date-icons">Date</div>
          <div className="note-lower-icons">
            <i className="fas fa-palette"></i>
            <i className="fas fa-tag"></i>
            <i className="fas fa-archive"></i>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <div className="typora-note">
        <div className="note-title-and-pin">
          <input className="note-title" type="text" placeholder="Title" />
          <div>
            <i className="fas fa-thumbtack"></i>
          </div>
        </div>
        <input className="note-content" type="text" placeholder="Content" />
        <div className="note-lower-date-and-icons">
          <div className="note-date-icons">Date</div>
          <div className="note-lower-icons">
            <i className="fas fa-palette"></i>
            <i className="fas fa-tag"></i>
            <i className="fas fa-archive"></i>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <div>OTHERS</div>
      <div className="typora-note">
        <div className="note-title-and-pin">
          <input className="note-title" type="text" placeholder="Title" />
          <div>
            <i className="fas fa-thumbtack"></i>
          </div>
        </div>
        <input className="note-content" type="text" placeholder="Content" />
        <div className="note-lower-date-and-icons">
          <div className="note-date-icons">Date</div>
          <div className="note-lower-icons">
            <i className="fas fa-palette"></i>
            <i className="fas fa-tag"></i>
            <i className="fas fa-archive"></i>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div> */}
    </main>
  );
}
