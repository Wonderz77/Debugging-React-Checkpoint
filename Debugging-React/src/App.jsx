import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * Main application component.
 * This component handles the state of a counter and displays logos and basic information.
 * It's part of a debugging task intended to be inspected with React Developer Tools.
 */
function App() {
  // State for the counter, initialized to 0
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Vite logo link */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* React logo link */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Counter button: increments state when clicked */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App