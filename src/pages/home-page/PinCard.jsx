import axios from "axios";
import React from "react";
import { useNote } from "../../note-context";
export default function PinCard({ note }) {
  const { state, dispatch } = useNote();

  // async function unpinHandler() {
  //   let token = localStorage.getItem("authToken");
  //   try {
  //     const response = await axios.post(
  //       "/api/notes",
  //       {
  //         note: note,
  //       },
  //       {
  //         headers: {
  //           authorization: token,
  //         },
  //       }
  //     );

  //     if (response.status === 201) {
  //       dispatch({ type: "REMOVE_FROM_PINNED", payload: note._id });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
            <i
              className="fas fa-thumbtack"
              //   onClick={() => {
              //     dispatch({ type: "REMOVE_FROM_PINNED", payload: note.id });
              //     dispatch({ type: "ADD_NOTES", payload: note });
              //   }}
            ></i>
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
          {/* <input className="note-label-op" type="text" value={note.label} /> */}

          {/* <i className="fas fa-palette"></i> */}
          {/* <i className="fas fa-tag"></i> */}
          <i className="fas fa-archive"></i>
          <i
            className="fas fa-trash-alt"
            // onClick={() => {
            //   dispatch({ type: "DELETE_FROM_PIN", payload: note.id });
            //   dispatch({ type: "ADD_TO_TRASH", payload: note });
            // }}

            onClick={() => trashNoteFromPin(note)}
          ></i>
        </div>
      </div>
    </div>
  );
}
