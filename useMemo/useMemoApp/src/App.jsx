import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import './App.css'
import First from './components/First';

function App() {
  const 
    [signedIn, setSignedIn] = useState(false);

  function signInHandler (){
    console.log("Sign in Handler");
    setSignedIn(!signedIn)
  }

  function logOutHandler(){
    console.log("log out handler")
    setSignedIn(false)
  }

  function checkLogIn(){
    console.log("Checking log in, fetching")
    console.log("-----")
    console.log("signedIn:",signedIn)
  }

  // useEffect(() => {
  //   const log = setInterval(() => {
  //     checkLogIn()
  //   },4000);
  //   return () => clearInterval(log)
  // },[])

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

        </Blog>
      </div>
      }
      
    </>
  )
}

export default App
