import React, {ChangeEvent, useState} from "react";
interface AddNoteInputProps {
    addNote(note:string): void
}
export const AddNoteInput: React.FC<AddNoteInputProps> = ({addNote}) => {
    const [note,setNote]=useState ("")
    const updateNote = (e:  ChangeEvent<HTMLInputElement>)=>{setNote(e.target.value)}
    const onNewNoteClick = () =>{
        addNote(note)
        setNote("")
    }
    return (
        <div>
            <input value={note} type="text" onChange ={updateNote} name="note" placeholder="enter note"/>
            <button onClick={onNewNoteClick} >Add</button>
        </div>
)
}