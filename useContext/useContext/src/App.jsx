import './App.css'
import Counter from './components/Counter'
import First from './components/First'
import { MealsProvider } from './providers/MealsProvider'
function App() {

  return (
    <>
      <MealsProvider>
        <Counter />
        <h1>Use Context study</h1>
        <div className="card">
          <First />
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </MealsProvider>

    </>
  )
}

export default App
