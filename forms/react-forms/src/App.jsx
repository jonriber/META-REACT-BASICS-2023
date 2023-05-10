// import { useState } from 'react'

import './App.css'
import ControlledForm from './components/forms/controlled/ControlledForm'
import UncontrolledForm from './components/forms/uncontrolled/UncontrolledForm'

function App() {

  return (
    <>
      
      <h1>Uncontrolled VS Controlled Components</h1>
      <div className="card">
        <UncontrolledForm />
      </div>
      <div className="card">
        <ControlledForm />
      </div>
      <p className="read-the-docs">
        To check more about it, check my github page!
      </p>

      <p className="read-the-docs">
        Jonatas Ribeiro
      </p>
    </>
  )
}

export default App
