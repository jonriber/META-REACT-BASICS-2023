import { useState } from 'react'

import './App.css'
import RadioGroup from './components/RadioGroup'
import RadioOption from './components/RadioOption';

function App() {
  const [selected, setSelected] = useState("first");

  return (
    <>
     
      <h1>Building custom components</h1>
      <h2>Component composition</h2>

      <div className="card">

        <p>
          Using a RadioGroup component
        </p>
        <RadioGroup selected={selected} onChange={setSelected}>
          <RadioOption value={"first"}>First</RadioOption>
          <RadioOption value={"second"}>Second</RadioOption>
          <RadioOption value={"third"}>Third</RadioOption>
        </RadioGroup>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
