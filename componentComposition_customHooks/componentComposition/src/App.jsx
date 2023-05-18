import { useEffect, useState } from 'react'

import './App.css'
import RadioGroup from './components/RadioGroup'
import RadioOption from './components/RadioOption';
import PropTesting from './components/PropTesting';
import withMousePosition from './HOCs/withMousePosition';
import MousePositionLogger from './components/MousePositionLogger';
import MousePositionTracker from './components/MousePositionTracker';
import MyButton from './components/TestButton';

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
  var testing = [{teste:1,text:"oi"},{teste:2,text:"tchauuu"}]
  var testing2 = [...testing].reverse()
  const toRender = testing2.map((item,index) =>(
    <li key={index}>{item.text}</li>
  )
  )
  console.log("re-rendered!!!",testing2)
  return (
    <>
     
      <h1>Building custom components</h1>
      <h2>Component composition</h2>

      <div className="card">

        <p>
          Using a RadioGroup component
        </p>
        <RadioGroup selected={selected} onChange={setSelected}>
          <RadioOption value={"HOC"}>First</RadioOption>
          <RadioOption value={"prop Render"}>Second</RadioOption>
        </RadioGroup>

        {selected === "HOC" && <MousePositionLoogerTracker/>}
        {selected === "prop Render" && <MousePositionTracker />}

        <PropTesting {...propTest} cake={"tiramisu"}  cal={500} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MyButton onClick={() => console.log("app click")}>Submit teste</MyButton>

      <ul>
        {toRender}
      </ul>
    </>
  )
}

export default App
