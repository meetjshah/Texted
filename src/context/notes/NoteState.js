import NoteContext from "./noteContext";
//import { useState } from "react";
const NoteState = (props)=> {
    //Watch usecontext hook video to understand use.
    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;