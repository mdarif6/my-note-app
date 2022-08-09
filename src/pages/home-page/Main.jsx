import React from "react";
import { useState } from "react";
import { useNote } from "../../note-context";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { useEffect } from "react";
import NoteCard from "./NoteCard";
import PinCard from "./PinCard";

export default function Main() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("");
  const { state, dispatch } = useNote();
  const [showNote, setShowNote] = useState(false);
  const [search, setSearch] = useState("");
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    (async function displayNotes() {
      let token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/notes", {
          headers: {
            authorization: token,
          },
        });

        if (response.status === 200) {
          dispatch({ type: "ADD_NOTES", payload: response.data.notes });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  async function clickHandler() {
    let token = localStorage.getItem("authToken");
    if (title.length > 0 && content.length > 0) {
      // dispatch({
      //   type: "ADD_NOTES",
      //   payload: { id: uuid(), title, content, color, label, date: new Date() },
      // });
      // dispatch({ type: "ADD_LABEL" });
      try {
        const response = await axios.post(
          "/api/notes",
          {
            note: { title, content, color, label, date: new Date() },
          },
          {
            headers: {
              authorization: token,
            },
          }
        );

        if (response.status === 201) {
          (async function showAddedNotes() {
            let token = localStorage.getItem("authToken");
            try {
              const response = await axios.get("/api/notes", {
                headers: {
                  authorization: token,
                },
              });

              if (response.status === 200) {
                dispatch({ type: "ADD_NOTES", payload: response.data.notes });
              }
            } catch (error) {
              console.log(error);
            }
          })();
        }
      } catch (error) {
        console.log(error);
      }

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

  function updatedPinNotes(notes, pinned) {
    return notes.filter((item) => {
      return !pinned.some((ele) => ele._id === item._id);
    });
  }
  const setByPinned = updatedPinNotes(state.notes, state.pinned);
  const setByTime = sortingByTime(setByPinned, state.sortByTime);
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
          <div>{/* <i className="fas fa-thumbtack"></i> */}</div>
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

      {setBySearch.map((note) => {
        return <NoteCard note={note} key={note._id} />;
      })}

      {/* pin */}

      <div id="note-category">PINNED</div>
      {state.pinned.map((note) => (
        <PinCard note={note} key={note._id} />
      ))}
    </main>
  );
}
