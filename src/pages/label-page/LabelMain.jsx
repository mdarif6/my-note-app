import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNote } from "../../note-context";
import notavailable from "../../assets/images/not_available.svg";

export default function LabelMain() {
  const { state, dispatch } = useNote();

  useEffect(() => {
    (async function displayLabeledNotes() {
      let token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/notes", {
          headers: {
            authorization: token,
          },
        });

        if (response.status === 200) {
          dispatch({ type: "ADD_LABELS", payload: response.data.notes });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  async function deleteLabelHandler(note) {
    let token = localStorage.getItem("authToken");
    try {
      const response = await axios.delete(`/api/archives/delete/${note._id}`, {
        headers: {
          authorization: token,
        },
      });

      if (response.status === 200) {
        dispatch({
          type: "DELETE_FROM_LABEL",
          payload: response.data.archives,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="typora-main">
      <div className="page-title">Labels</div>

      {state.label.length > 0 ? (
        <>
          {state.label.map((note) => (
            <div
              className="typora-note"
              key={note._id}
              style={{ backgroundColor: note.color }}
            >
              {note.label}
              <div className="note-title-and-pin">
                <div className="title-op">{note.title}</div>
                <div>{/* <i className="fas fa-thumbtack"></i> */}</div>
              </div>
              <div className="content-op">{note.content}</div>
              <div className="note-lower-date-and-icons">
                <div className="note-date-icons">
                  {new Date(note.date).getDate()}/
                  {new Date(note.date).getMonth() + 1}/
                  {new Date(note.date).getFullYear()}
                  <small>
                    {new Date(note.date).getHours()}:
                    {String(new Date(note.date).getMinutes()).padStart(2, "0")}:
                    {String(new Date(note.date).getSeconds()).padStart(2, "0")}
                  </small>
                </div>

                <div className="note-lower-icons">
                  <i className="fas fa-archive"></i>
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => deleteLabelHandler(note)}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="emptypage-message-wrapper">
          <div className="notavailable-img">
            <img src={notavailable} alt="not-available" />
          </div>
          <div className="emptypage-message">take a note first !</div>
        </div>
      )}
    </main>
  );
}
