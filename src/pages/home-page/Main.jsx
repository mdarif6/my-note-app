import React from "react";
import { useState } from "react";
import { useNote } from "../../note-context";
import { v4 as uuid } from "uuid";

export default function Main() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("");
  const { state, dispatch } = useNote();
  const [showNote, setShowNote] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [search, setSearch] = useState("");

  function clickHandler() {
    if (title.length > 0 && content.length > 0) {
      dispatch({
        type: "ADD_NOTES",
        payload: { id: uuid(), title, content, color, label, date: new Date() },
      });
      dispatch({ type: "ADD_LABEL" });
      setTitle("");
      setContent("");
      setLabel("");
    } else {
      alert("title and content fields are required");
    }
  }
  const combinedTime = [...state.notes, ...state.pinned];
  function sortingByTime(combinedTime, sort) {
    if (sort === "LATEST_NOTE") {
      return combinedTime.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sort === "OLDTEST_NOTE") {
      return combinedTime.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else {
      return combinedTime;
    }
  }

  function sortByLabel(items, categ) {
    if (categ.length !== 0) {
      return items.filter((item) => {
        if (categ.indexOf(item.label) !== -1) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      return items;
    }
  }

  function searchingNote(items, query) {
    return items.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  }

  const setByTime = sortingByTime(state.notes, state.sortByTime);
  const setByLabel = sortByLabel(setByTime, state.filterByLabel);
  const setBySearch = searchingNote(setByLabel, search);

  return (
    <main className="typora-main">
      <div className="search-box-container">
        <div className="search-box">
          <input
            className="search-input"
            type="text"
            name="name"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <button className="search-button">
            <i class="fas fa-sliders-h"></i>
          </button> */}
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
            onClick={() => setShowNote(!showNote)}
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
          <div className="note-date-icons">Date & time</div>
          <div className="note-lower-icons">
            <input
              className="note-label-ip"
              type="text"
              placeholder="Give a Label"
              value={label}
              onChange={(e) => {
                setLabel(e.target.value);
              }}
            />
            <button className="adding-btn" onClick={clickHandler}>
              ADD
            </button>
          </div>
        </div>
      </div>

      {setBySearch.map((note) => (
        <div
          className="typora-note output-display"
          key={note.id}
          style={{ backgroundColor: note.color }}
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
                {String(new Date(note.date).getMinutes()).padStart(2, "0")}:
                {String(new Date(note.date).getSeconds()).padStart(2, "0")}
              </small>
            </div>

            <div className="note-lower-icons">
              <div className="note-label-op"> {note.label}</div>
              <input
                type="color"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                  dispatch({ type: "COLOR", payload: color });
                }}
              />
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
                  dispatch({ type: "DELETE_NOTES", payload: note.id });
                  dispatch({ type: "ADD_TO_TRASH", payload: note });
                }}
              ></i>
            </div>
          </div>
        </div>
      ))}

      {/* pin */}

      <div id="note-category">PINNED</div>
      {state.pinned.map((note) => (
        <div
          className="typora-note output-display"
          key={note.id}
          style={{ backgroundColor: state.color }}
        >
          <div className="note-title-and-pin">
            {/* <textarea
              className="note-title"
              placeholder="Title"
              value={note.title}
            /> */}
            <div className="title-op">{note.title}</div>
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
          {/* <textarea
            className="note-content"
            placeholder="Content"
            value={note.content}
          /> */}
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
              {/* <input className="note-label-op" type="text" value={note.label} /> */}

              {/* <i className="fas fa-palette"></i> */}
              <i className="fas fa-tag"></i>
              <i className="fas fa-archive"></i>
              <i
                className="fas fa-trash-alt"
                onClick={() => {
                  dispatch({ type: "DELETE_FROM_PIN", payload: note.id });
                  dispatch({ type: "ADD_TO_TRASH", payload: note });
                }}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
