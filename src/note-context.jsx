import { createContext, useContext } from "react";
import { useReducer } from "react";

const NoteContext = createContext();

const initialState = {
  notes: [],
  pinned: [],
  archive: [],
  filterByLabel: [],
};

function noteReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTES":
      return { ...state, notes: [...state.notes, action.payload] };

    case "DELETE_NOTES":
      const updatedNotes = state.notes.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, notes: updatedNotes };

    case "REMOVE_FROM_PINNED":
      const updatedPin = state.pinned.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        pinned: updatedPin,
      };

    case "ADD_TO_PIN":
      return { ...state, pinned: [...state.pinned, action.payload] };
    case "ADD_TO_ARCHIVE":
      return { ...state, archive: [...state.archive, action.payload] };

    case "FILTER_LABEL":
      return {
        ...state,
        filterByLabel: [...state.filterByLabel, action.payload],
      };

    case "REMOVE_LABEL":
      const removalLabel = [...state.filterByLabel];
      const indexRemoval = removalLabel.indexOf(action.payload);
      removalLabel.splice(indexRemoval, 1);
      console.log(removalLabel);
      return { ...state, filterByLabel: removalLabel };

    default:
      return state;
  }
}

const NoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, initialState);
  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
