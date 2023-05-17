import { useEffect, useState } from 'react'

import './App.css'
import RadioGroup from './components/RadioGroup'
import RadioOption from './components/RadioOption';
import PropTesting from './components/PropTesting';
import withMousePosition from './HOCs/withMousePosition';
import MousePositionLogger from './components/MousePositionLogger';

function App() {
  const [selected, setSelected] = useState("first"); //when 

  useEffect(()=>{ //this one will cause app to re-render only when selected variable change
    document.title = `${selected} Option`
  },[selected])

  const propTest = {
    cake:"cake1",
    cal: 400
  };

  const MousePositionLoogerTracker = withMousePosition(MousePositionLogger)

  console.log("re-rendered!!!")
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

        {selected === "first" && <MousePositionLoogerTracker/>}

        <PropTesting {...propTest} cake={"tiramisu"}  cal={500} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
