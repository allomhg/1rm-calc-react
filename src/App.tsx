import './App.css'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'
// import { Table } from './components/Table/Table'
// import { WeightContext, RepsContext } from './context/Context'
// import { InputContext } from './context/Context'
// import { useState } from 'react'

function App() {
  // const [input, setInput] = useState([0, 0]);
  
  return (
    <main className="container rounded-md border-black border-solid border-2">
      <Header />
      <Form />
      {/* <Table /> */}
    </main>
  )
}

export default App
