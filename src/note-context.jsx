import { createContext, useContext } from "react";
import { useReducer } from "react";

const NoteContext = createContext();

const initialState = {
  notes: [],
  pinned: [],
  archive: [],
  trash: [],
  label: [],
  sortByTime: "",
  filterByLabel: [],
};

function noteReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTES":
      return { ...state, notes: action.payload };
    case "ADD_LABELS":
      return { ...state, label: action.payload };

    case "DELETE_FROM_LABEL":
      const updatedLabel = state.label.filter(
        (item) => item._id !== action.payload
      );
      return { ...state, label: updatedLabel };

    case "DELETE_NOTES":
      const updatedNotes = state.notes.filter(
        (item) => item._id !== action.payload
      );
      return { ...state, notes: updatedNotes };

    case "REMOVE_FROM_PINNED":
      const updatedPin = [...state.pinned].filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        pinned: updatedPin,
      };

    case "ADD_TO_PIN":
      return { ...state, pinned: [...state.pinned, action.payload] };
    case "DELETE_FROM_PIN":
      const updatedPinned = state.pinned.filter(
        (item) => item._id !== action.payload
      );
      return { ...state, pinned: updatedPinned };
    case "ADD_TO_ARCHIVE":
      return { ...state, archive: action.payload };
    case "DELETE_FROM_ARCHIVE":
      const updatedArchive = state.archive.filter(
        (item) => item._id !== action.payload
      );
      return { ...state, archive: updatedArchive };

    case "ADD_TO_TRASH":
      return { ...state, trash: action.payload };
    case "DELETE_FROM_TRASH":
      const updatedTrash = state.trash.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, trash: updatedTrash };

    case "LATEST_NOTE":
      return { ...state, sortByTime: action.type };
    case "OLDTEST_NOTE":
      return { ...state, sortByTime: action.type };
    case "FILTER_LABEL":
      return {
        ...state,
        filterByLabel: [...state.filterByLabel, action.payload],
      };

    case "REMOVE_LABEL":
      const removalLabel = [...state.filterByLabel];
      const indexRemoval = removalLabel.indexOf(action.payload);
      removalLabel.splice(indexRemoval, 1);

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
