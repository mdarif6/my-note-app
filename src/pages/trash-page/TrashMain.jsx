import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNote } from "../../note-context";

export default function TrashMain() {
  const { state, dispatch } = useNote();

  useEffect(() => {
    (async function showTrashedNote() {
      let token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/trash", {
          headers: {
            authorization: token,
          },
        });

        if (response.status === 200) {
          dispatch({ type: "ADD_TO_TRASH", payload: response.data.trash });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  async function restoreTrashedHandler(note) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        `/api/trash/restore/${note._id}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        const responseTwo = await axios.get("/api/trash", {
          headers: {
            authorization: token,
          },
        });

        if (responseTwo.status === 200) {
          dispatch({ type: "ADD_TO_TRASH", payload: responseTwo.data.trash });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTrashHandler(note) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.delete(`/api/trash/delete/${note._id}`, {
        headers: {
          authorization: token,
        },
      });

      if (response.status === 200 || response.status === 201) {
        const responseTwo = await axios.get("/api/trash", {
          headers: {
            authorization: token,
          },
        });

        if (responseTwo.status === 200) {
          dispatch({ type: "ADD_TO_TRASH", payload: responseTwo.data.trash });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="typora-main">
      {state.trash.map((note) => (
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
                className="fa-solid fa-trash-arrow-up"
                onClick={() => restoreTrashedHandler(note)}
              ></i>

              <i
                className="fas fa-trash-alt"
                onClick={() => deleteTrashHandler(note)}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
