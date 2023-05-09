import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import './App.css'
import First from './components/First';

function App() {
  const 
    [signedIn, setSignedIn] = useState(false);

  function signInHandler (){
    console.log("Sign in Handler");
    setSignedIn(()=> setSignedIn(!signedIn) )
  }

  function logOutHandler(){
    console.log("log out handler")
    setSignedIn(()=> setSignedIn(false) )
  }

  useEffect(() => {

  },[])

  return (
    <>
      <h1>Using MEMO with functions!</h1>
      <div className="card">
        <button onClick={signInHandler}>
          Logar
        </button>
        <button onClick={logOutHandler}>
          Deslogar
        </button>
       
      </div>
      <div>
        <p>
          Status do login: {signedIn ? signedIn.toString(): "false"}
        </p>
      </div>
      
      {signedIn && 
      <div>
        <Blog signedIn={signedIn}>
          <First />
        </Blog>
      </div>
      }
      
    </>
  )
}

export default App
