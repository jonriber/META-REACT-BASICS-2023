import './App.css'
import TaskApp from './components/TaskApp'

function App() {

  return (
    <>
      <div>
        
      </div>
      <h1>React Context use case</h1>
      <div className="card">
        <p>
          Tenho alguns dados que precisam se tornar disponível <strong>globalmente</strong> no app
        </p>
        <p>
          A seguir alguns exemplos de dados globais:
        </p>
        <ul>
          <li>Tema</li>
          <li>Informação de Login</li>
          <li>Localização</li>
          <li>Timestamp de login</li>
        </ul>
      </div>
      <div className='taskcard'>
        <TaskApp />
      </div>

      <footer className='footer'><b>Jonatas Ribeiro</b>. 2023</footer>
     
    </>
  )
}

export default App
