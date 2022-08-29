import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useNote } from "../note-context";
import FilterLabel from "../pages/home-page/FilterLabel";
import { useAuth } from "../auth-context";

export default function Aside() {
  const { state, dispatch } = useNote();
  const { state: authState, dispatch: authDispatch } = useAuth();
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const updatedLabel = [...state.notes, ...state.pinned].reduce((acc, curr) => {
    if (acc.indexOf(curr.label) === -1) {
      acc.push(curr.label);
    }
    return acc;
  }, []);

  function logoutHandler() {
    localStorage.removeItem("authToken");
    authDispatch({ type: "SET_AUTH", payload: false });
    navigate("/login");
  }

  return (
    <aside className="typora-aside">
      <div className="aside-content-wraper">
        <div className="typora-aside-content">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-style  link-active" : "link-style"
            }
            to="/home"
          >
            <div className="aside-content-label">
              <div>
                <i className="fas fa-home"></i>
              </div>

              <div>Home</div>
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link-style  link-active" : "link-style"
            }
            to="/label"
          >
            <div className="aside-content-label">
              <div>
                <i className="fas fa-tag"></i>
              </div>
              <div>Labels</div>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-style  link-active" : "link-style"
            }
            to="/archive"
          >
            <div className="aside-content-label">
              <div>
                <i className="fas fa-archive"></i>
              </div>

              <div>Archive</div>
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link-style  link-active" : "link-style"
            }
            to="/trash"
          >
            <div className="aside-content-label">
              <div>
                <i className="fas fa-trash"></i>
              </div>

              <div>Trash</div>
            </div>
          </NavLink>

          {authState.isAuthenticated ? (
            <div className="aside-content-label">
              <div className="typora-logout-btn" onClick={logoutHandler}>
                <i className="fas fa-power-off"></i>
                <div>Logout</div>
              </div>
            </div>
          ) : (
            <div className="aside-content-label">
              <div>
                <i className="far fa-user-circle"></i>
              </div>
              <Link className="link-style" to="/login">
                <div>Login</div>
              </Link>
            </div>
          )}
        </div>

        <div className="typora-sorting-container">
          <div className="sorting-heading">
            Sort & Filter Notes
            <i
              id="drop-down"
              className="fas fa-filter"
              onClick={() => setShowFilter(!showFilter)}
            ></i>
          </div>
          <div className="blank-div"></div>
          {showFilter && (
            <div className="to-show-all-sorting">
              <div className="sorting">
                <label className="lable-name" htmlFor="time">
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
                </div>
              </div>

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
