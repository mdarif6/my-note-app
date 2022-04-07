import React from "react";
import { Link } from "react-router-dom";
export default function TrashAside() {
  return (
    <aside className="typora-aside">
      <div className="aside-content-wraper">
        <div className="typora-aside-content">
          <div className="aside-content-label">
            <div>
              <i className="fas fa-home"></i>
            </div>
            <Link className="link-style" to="/home">
              <div>Home</div>
            </Link>
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
            <div className="link-active">Trash</div>
          </div>
          <div className="aside-content-label">
            <div>
              <i className="far fa-user-circle"></i>
            </div>
            <div>Profile</div>
          </div>
        </div>
        <div className="join-button">
          <button className="btn btn-primary">Create New Notes</button>
        </div>
        <div className="typora-sorting-container">
          <div className="sorting-heading">
            Sort & Filter Notes
            <i id="drop-down" className="fas fa-chevron-circle-down"></i>
          </div>
          <div className="blank-div"></div>
          <div className="to-show-all-sorting">
            <div className="sorting">
              <label className="lable-name" for="time">
                Sort By
              </label>
              <div>
                <select className="select" name="time" id="time">
                  <option value="newst">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
            <div className="filtering">
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
            </div>
            <div className="selection">
              <label className="lable-name">Select Label</label>
              <div className="select-checkbox">
                <div>
                  <input
                    className="select-input"
                    type="checkbox"
                    name="label1"
                    value="Bike"
                  />
                  <label className="lable-name" for="label1">
                    Label 1
                  </label>
                </div>
                <div>
                  <input
                    className="select-input"
                    type="checkbox"
                    name="label2"
                    value="Car"
                  />
                  <label className="lable-name" for="label2">
                    Label 2
                  </label>
                </div>
                <div>
                  <input
                    className="select-input"
                    type="checkbox"
                    name="lable3"
                    value="Boat"
                  />
                  <label className="lable-name" for="lable3">
                    Label 3
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
