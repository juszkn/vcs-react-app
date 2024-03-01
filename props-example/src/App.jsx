import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/Button.jsx";

function App() {

  return (
    <>
      <Button text="testas" style="active" showIcon="true"/>
      <Button text="Propsas"/>
      <Button text="geras"/>
      <Button text="arrow"/>
    </>
  )
}

export default App
