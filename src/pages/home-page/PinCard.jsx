import axios from "axios";
import React from "react";
import { useNote } from "../../note-context";
export default function PinCard({ note }) {
  const { state, dispatch } = useNote();

  async function trashNoteFromPin(toTrashNote) {
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

      if (response.status === 201) {
        dispatch({ type: "REMOVE_FROM_PINNED", payload: note._id });

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

  return (
    <div
      className="typora-note output-display"
      key={note._id}
      style={{ backgroundColor: note.color }}
    >
      <div className="note-title-and-pin">
        <div className="title-op">{note.title}</div>

        {state.pinned.some((item) => item._id === note._id) ? (
          <div>
            <i
              className="fa-solid fa-arrow-up"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_PINNED", payload: note._id })
              }
            ></i>
          </div>
        ) : (
          <div>
            <i className="fas fa-thumbtack"></i>
          </div>
        )}
      </div>

      <div className="content-op">{note.content}</div>
      <div className="note-lower-date-and-icons">
        <div className="note-date-icons">
          {new Date(note.date).getDate()}/
          {new Date(note.date).getUTCMonth() + 1}/
          {new Date(note.date).getFullYear()}
          <small>
            {new Date(note.date).getHours()}:{new Date(note.date).getMinutes()}:
            {new Date(note.date).getSeconds()}
          </small>
        </div>
        <div className="note-lower-icons">
          <div className="note-label-op"> {note.label}</div>

          <i className="fas fa-archive"></i>
          <i
            className="fas fa-trash-alt"
            onClick={() => trashNoteFromPin(note)}
          ></i>
        </div>
      </div>
    </div>
  );
}
