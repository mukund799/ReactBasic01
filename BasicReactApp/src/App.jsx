import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const up = () =>{
    if(count >= 20){ alert(" count can't be greater than 20"); return}
    setCount(count => count+1)
    
  }
  const down = () =>{
    if(count <=0){ alert(" count can't be lesser than 0"); return}
    setCount(count -1)
  }
  return (
    <>
      <h3> React with Mukund</h3>
      <h1>Count is {count}</h1>
      <button onClick={up}>Up</button>
      <br></br>
      <button onClick={down}>Down</button>
    </>
  )
}

export default App
