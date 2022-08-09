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
            <div></div>
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

              <i
                className="fa-solid fa-rotate-left"
                onClick={() => archiveRestoreHandler(note)}
              ></i>
              <i
                className="fas fa-trash-alt"
                onClick={() => deleteArchiveHandler(note)}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
