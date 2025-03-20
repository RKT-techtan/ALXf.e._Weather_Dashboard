import Mainpage from './components/Mainpage'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Mainpage/>
    </div>
  )
}

export default App
