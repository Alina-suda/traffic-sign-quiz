import { useState, useEffect } from 'react'
import { healthCheck } from './api/client'
import './App.css'

function App() {
  const [message, setMessage] = useState("Checking Flask...")

  useEffect(() => {
    healthCheck()
      .done((data) => {
        setMessage(data.message);
      })

      .fail(() => {
        setMessage("Could not connect to Flask");
      })
  }, [])

  return (
    <main className="container py-5">
      <h1>Traffic Sign Quiz</h1>
      <p>{message}</p>
    </main>
  )
}

export default App
