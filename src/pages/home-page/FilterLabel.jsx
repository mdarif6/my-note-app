import React from "react";
import { useNote } from "../../note-context";

export default function FilterLabel({ item }) {
  const { state, dispatch } = useNote();
  return (
    <div key={item}>
      <input
        className="select-input"
        type="checkbox"
        id={item}
        onChange={(e) => {
          if (e.target.checked) {
            dispatch({
              type: "FILTER_LABEL",
              payload: item,
            });
          } else {
            dispatch({
              type: "REMOVE_LABEL",
              payload: item,
            });
          }
        }}
      />

      <label className="lable-name" for={item}>
        {item}
      </label>
    </div>
  );
}
