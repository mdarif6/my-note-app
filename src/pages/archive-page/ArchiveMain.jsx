import React from "react";

export default function ArchiveMain() {
  return (
    <main className="typora-main">
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

      {/* <div className="search-box-container">
        <div className="search-box">
          <input
            className="search-input"
            type="text"
            name="name"
            placeholder="search"
          />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div id="note-category">PINNED</div>
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
