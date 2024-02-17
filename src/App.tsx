// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="container rounded">
      <header className="bg-black p-4 rounded-t text-center">
        <h1 className="text-3xl font-bold">One Repetition Max Calculator</h1>
      </header>
      <section>
        <h2 className="text-2xl p-4">One Rep Max (1RM)</h2>
        <p className="px-4">One repetition max is the maximum amount of weight you can push for one repetition for a given exercise.</p>
      </section>
    </main>
  )
}

export default App
