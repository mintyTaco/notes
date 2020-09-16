import React from "react";
import { AddNoteInput } from "./AddNoteInput";
import {useDispatch, useSelector} from "react-redux";
import { NotesState } from "./notesReducer";
import {addNote} from "./Actions";

function App() {
  // NotesState= input value , NotesStatre[notes] = return value
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch()
  const onAddNote= (note:string) =>{
      dispatch(addNote(note))
  }
  return (
    <div>
      <AddNoteInput addNote={onAddNote} />
      <ul>
      {notes.map((note) => {
        return <li>{note}</li>;
      })}
      </ul>
    </div>
  );
}

export default App;
