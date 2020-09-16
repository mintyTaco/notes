import {createStore} from "redux"
import {notesReducers} from "./notesReducer";

export const store = createStore(notesReducers)