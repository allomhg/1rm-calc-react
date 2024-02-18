// import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="container rounded-md border-black border-solid border-2">
      <Header />
      <Form />
    </main>
  )
}

export default App
