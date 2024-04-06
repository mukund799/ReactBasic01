import { useState } from 'react'
import './App.css'
import { Button } from './component/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>I am mukund</h3>
      <Button text = {{black:"Black", red:"Red", blue:"Blue", green:"green"}} />
    </>
  )
}

export default App
