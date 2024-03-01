import { useState } from 'react'
import Button from "./components/button/Button.jsx";
import './App.css'
import AlternativeButton from "./components/alternative-button/AlternativeButton.jsx";
import Input from "./input/Input.jsx";
import IdButtons from "./components/id-buttons/idButtons.jsx";

function App() {

    return (
        <>
            <Button />
            <AlternativeButton />
            <Input />
            {/*<IdButtons />*/}
        </>
    )
}
export default App
