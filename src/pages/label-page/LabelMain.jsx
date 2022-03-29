import React from "react";

export default function LabelMain() {
  return (
    <main class="typora-main">
      <div class="search-box-container">
        <div class="search-box">
          <input
            class="search-input"
            type="text"
            name="name"
            placeholder="search"
          />
          <button class="search-button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div id="note-category">PINNED</div>
      <div class="typora-note">
        <div class="note-title-and-pin">
          <input class="note-title" type="text" placeholder="Title" />
          <div>
            <i class="fas fa-thumbtack"></i>
          </div>
        </div>
        <input class="note-content" type="text" placeholder="Content" />
        <div class="note-lower-date-and-icons">
          <div class="note-date-icons">Date</div>
          <div class="note-lower-icons">
            <i class="fas fa-palette"></i>
            <i class="fas fa-tag"></i>
            <i class="fas fa-archive"></i>
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <div class="typora-note">
        <div class="note-title-and-pin">
          <input class="note-title" type="text" placeholder="Title" />
          <div>
            <i class="fas fa-thumbtack"></i>
          </div>
        </div>
        <input class="note-content" type="text" placeholder="Content" />
        <div class="note-lower-date-and-icons">
          <div class="note-date-icons">Date</div>
          <div class="note-lower-icons">
            <i class="fas fa-palette"></i>
            <i class="fas fa-tag"></i>
            <i class="fas fa-archive"></i>
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <div>OTHERS</div>
      <div class="typora-note">
        <div class="note-title-and-pin">
          <input class="note-title" type="text" placeholder="Title" />
          <div>
            <i class="fas fa-thumbtack"></i>
          </div>
        </div>
        <input class="note-content" type="text" placeholder="Content" />
        <div class="note-lower-date-and-icons">
          <div class="note-date-icons">Date</div>
          <div class="note-lower-icons">
            <i class="fas fa-palette"></i>
            <i class="fas fa-tag"></i>
            <i class="fas fa-archive"></i>
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </main>
  );
}
