import {Action} from "./Actions";

export interface NotesState{
    notes:string[]
}


const initialState={
    notes: []
}
export const notesReducers = (state:NotesState = initialState,action:Action) =>{
    switch (action.type){
        case "ADD_NOTE":{
            return {...state,notes:[...state.notes, action.payload]}
        }
        default:{
            return state
        }
    }
}