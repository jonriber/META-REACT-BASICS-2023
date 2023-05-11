
import './App.css'
import Login from './components/Login'

function App() {

  return (
    <>
      <div className='container'>
        <h1>Login Form</h1>
        <Login />
        <h3>Development:</h3>
        <p className="read-the-docs">
          Using React Controlled Components with a local state.
        </p>
        <p className="read-the-docs">
          This way, I´m enabled to use real-time input validation (password and email).
        </p>
        <p className="read-the-docs">
          Made with <b>Vite</b> bundler and deployment with <b>github actions</b>.
        </p>
        <div>
          <h3>Check the code at my github repo <a href='https://github.com/jonriber/META-REACT-BASICS-2023/tree/main/forms/LoginForm'>HERE</a></h3>
        </div>

      </div>
      
      <footer><b>Jonatas Ribeiro</b>. 2023#</footer>
    </>
  )
}

export default App
