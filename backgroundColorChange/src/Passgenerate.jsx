import { useCallback, useEffect, useState } from 'react'
import './pass.css'

function Passgenerate() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("")
  
  // usecallback hooks used
  const password = useCallback(() => {
    let result = '';
    let str = "abcdefghijklmnopqrstuvwxyz"
    if(number) str+="12345789"
    console.log("number is "+ number)
    if(char) str+="!@#$%^&*()"
    console.log("char is "+ char)
    for (let i=0;i<length;i++) {
      result+= str.charAt(Math.floor(Math.random()*str.length))
    }
    setPass(result);
  },
  [length,number,char])
  

  //useStateEffact hooks is used whenever we have chnge in condition
  useEffect( () => {password()}, [length,char,number])

  return (
  <div className = "main">
    <div className='input'>
      <input className='textInput' type="text" placeholder='Password' value= {pass}/>
      <button >Copy</button>
    </div>
    <div className='checkbox'>
      <input type="range" 
      value={length}
      onChange={(e) => { setLength(e.target.value)}}

      />
      <label htmlFor="">length({length})</label>

      <input onClick={() => {setNumber(number => !number)}} type="checkbox" id="numberId" name="checkboxName" value={number} />
      <label htmlFor='numberId'>Number</label>

      <input onClick={() => {setChar(c => !c)}} type="checkbox" id="charId" name="checkboxName" value={char}/>
      <label  htmlFor='charId'>Character</label>

    </div>
  </div>
  )
}

export default Passgenerate
