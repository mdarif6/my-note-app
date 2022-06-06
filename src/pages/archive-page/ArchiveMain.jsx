import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNote } from "../../note-context";

export default function ArchiveMain() {
  const { state, dispatch } = useNote();

  useEffect(() => {
    (async function showArhivedNotes() {
      let token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/archives", {
          headers: {
            authorization: token,
          },
        });

        if (response.status === 200) {
          dispatch({ type: "ADD_TO_ARCHIVE", payload: response.data.archives });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  async function deleteArchiveHandler(note) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.delete(`/api/archives/delete/${note._id}`, {
        headers: {
          authorization: token,
        },
      });

      if (response.status === 200) {
        const responseTwo = await axios.get("/api/archives", {
          headers: {
            authorization: token,
          },
        });

        if (responseTwo.status === 200) {
          dispatch({
            type: "ADD_TO_ARCHIVE",
            payload: responseTwo.data.archives,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function archiveRestoreHandler(note) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        `/api/archives/restore/${note._id}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );

      // if (response.status === 200) {
      //   dispatch({ type: "ADD_NOTES", payload: response.data.archives });
      // }
      if (response.status === 200) {
        const responseTwo = await axios.get("/api/archives", {
          headers: {
            authorization: token,
          },
        });

        if (responseTwo.status === 200) {
          dispatch({
            type: "ADD_TO_ARCHIVE",
            payload: responseTwo.data.archives,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="typora-main">
      {state.archive.map((note) => (
        <div
          className="typora-note output-display"
          key={note._id}
          style={{ backgroundColor: note.color }}
        >
          <div className="note-title-and-pin">
            <div className="title-op">{note.title}</div>
            <div>
              {/* <i
                className="fas fa-thumbtack"
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_PINNED", payload: note.id });
                  dispatch({ type: "ADD_NOTES", payload: note });
                }}
              ></i> */}
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
              {/* <i className="fas fa-tag"></i> */}
              <i
                className="fa-solid fa-rotate-left"
                // onClick={() => {
                //   dispatch({ type: "ADD_NOTES", payload: note });
                //   dispatch({ type: "DELETE_FROM_ARCHIVE", payload: note.id });
                // }}

                onClick={() => archiveRestoreHandler(note)}
              ></i>
              <i
                className="fas fa-trash-alt"
                // onClick={() => {
                //   dispatch({ type: "DELETE_FROM_ARCHIVE", payload: note.id });
                //   dispatch({ type: "ADD_TO_TRASH", payload: note });
                // }}
                onClick={() => deleteArchiveHandler(note)}
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
