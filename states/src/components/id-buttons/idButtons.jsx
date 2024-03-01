import {useState} from "react";

const idButtons = () => {
const handleClickID = (e, id) => {
        // e.target.style.borderColor = 'red';
        console.log(id)
}
    return (
        <>
            <h2>ID perdavimas</h2>
            <button onClick={(e) => handleClickID(e, 1)}>Pirmas</button>
            <button onClick={(e) => handleClickID(e, 2)}>Antras</button>
            <button onClick={(e) => handleClickID(e, 3)}>Trecias</button>
        </>
    )
}

export default idButtons();