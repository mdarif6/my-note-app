import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NoteProvider, useNote } from "../../note-context";
import FilterLabel from "./FilterLabel";

export default function Aside() {
  const { state, dispatch } = useNote();
  const [showFilter, setShowFilter] = useState(false);

  console.log(state.notes.id);

  const updatedLabel = [...state.notes, ...state.pinned].reduce((acc, curr) => {
    if (acc.indexOf(curr.label) === -1) {
      acc.push(curr.label);
    }
    return acc;
  }, []);

  return (
    <aside className="typora-aside">
      <div className="aside-content-wraper">
        <div className="typora-aside-content">
          <div className="aside-content-label">
            <div>
              <i className="fas fa-home"></i>
            </div>

            <div className="link-active">Home</div>
          </div>

          <div className="aside-content-label">
            <div>
              <i className="fas fa-tag"></i>
            </div>
            <Link className="link-style" to="/label">
              <div>Labels</div>
            </Link>
          </div>

          <div className="aside-content-label">
            <div>
              <i className="fas fa-archive"></i>
            </div>
            <Link className="link-style" to="/archive">
              <div>Archive</div>
            </Link>
          </div>
          <div className="aside-content-label">
            <div>
              <i className="fas fa-trash"></i>
            </div>
            <Link className="link-style" to="/trash">
              <div>Trash</div>
            </Link>
          </div>
          <div className="aside-content-label">
            <div>
              <i className="far fa-user-circle"></i>
            </div>
            <Link className="link-style" to="/login">
              <div>Profile</div>
            </Link>
          </div>
        </div>
        <div className="join-button">
          <button className="btn btn-primary">Create New Notes</button>
        </div>

        <div className="typora-sorting-container">
          <div className="sorting-heading">
            Sort & Filter Notes
            <i
              id="drop-down"
              className="fas fa-chevron-circle-down"
              onClick={() => setShowFilter(!showFilter)}
            ></i>
          </div>
          <div className="blank-div"></div>
          {showFilter && (
            <div className="to-show-all-sorting">
              <div className="sorting">
                <label className="lable-name" for="time">
                  Sort By
                </label>
                <div>
                  <div>
                    <input
                      type="radio"
                      name="time-radio"
                      value="latest time"
                      onChange={() => dispatch({ type: "LATEST_NOTE" })}
                    />
                    <label htmlFor="newest first">Newst First</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="time-radio"
                      value="oldest time"
                      onChange={() => dispatch({ type: "OLDTEST_NOTE" })}
                    />
                    <label htmlFor="oldest first">Oldest First</label>
                  </div>

                  {/* <select className="select" name="time" id="time">
                    <option value="newst">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select> */}
                </div>
              </div>
              {/*  <div className="filtering">
                <label className="lable-name" for="time">
                  Filter By
                </label>
                <div>
                  <select className="select" name="priority" id="priority">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div> */}
              <div className="selection">
                <label className="lable-name">Select Label</label>

                <div className="select-checkbox">
                  {updatedLabel.map((item) => {
                    return <FilterLabel key={item} item={item} />;
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
