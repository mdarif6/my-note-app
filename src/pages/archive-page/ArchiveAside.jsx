import React from "react";

export default function ArchiveAside() {
  return (
    <aside class="typora-aside">
      <div class="aside-content-wraper">
        <div class="typora-aside-content">
          <div class="aside-content-label">
            <div>
              <i class="fas fa-home"></i>
            </div>
            <div>Home</div>
          </div>

          <div class="aside-content-label">
            <div>
              <i class="fas fa-tag"></i>
            </div>
            <div>Labels</div>
          </div>

          <div class="aside-content-label">
            <div>
              <i class="fas fa-archive"></i>
            </div>
            <div class="link-active">Archive</div>
          </div>
          <div class="aside-content-label">
            <div>
              <i class="fas fa-trash"></i>
            </div>
            <div>Trash</div>
          </div>
          <div class="aside-content-label">
            <div>
              <i class="far fa-user-circle"></i>
            </div>
            <div>Profile</div>
          </div>
        </div>
        <div class="join-button">
          <button class="btn btn-primary">Create New Notes</button>
        </div>
        <div class="typora-sorting-container">
          <div class="sorting-heading">
            Sort & Filter Notes
            <i id="drop-down" class="fas fa-chevron-circle-down"></i>
          </div>
          <div class="blank-div"></div>
          <div class="to-show-all-sorting">
            <div class="sorting">
              <label className="lable-name" for="time">
                Sort By
              </label>
              <div>
                <select class="select" name="time" id="time">
                  <option value="newst">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
            <div class="filtering">
              <label className="lable-name" for="time">
                Filter By
              </label>
              <div>
                <select class="select" name="priority" id="priority">
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
            <div class="selection">
              <label className="lable-name">Select Label</label>
              <div class="select-checkbox">
                <div>
                  <input
                    class="select-input"
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
                    class="select-input"
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
                    class="select-input"
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
