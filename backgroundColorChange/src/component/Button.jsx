import * as React from 'react'

export function Button({text}) {

    const black = () =>{
        console.log("blck func");
        document.body.style.backgroundColor = "black";    
    }
    const blue = () =>{
        console.log("blck func");
        document.body.style.backgroundColor = "blue";    
    }
    const green = () =>{
        console.log("blck func");
        document.body.style.backgroundColor = "green";    
    }
    const red = () =>{
        console.log("blck func");
        document.body.style.backgroundColor = "red";    
    }
  return (
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      <button onClick={black}
        type="button"
        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {text.black || "Black"}
      </button>
      <button
        onClick={blue}
        type="button"
        className="rounded-md border border-yellow-600 px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
      >
         {text.blue || "Blue"}
      </button>
      <button
        onClick={red}
        type="button"
        className="rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
         {text.red || "Red"}
      </button>
      <button
        onClick={green}
        type="button"
        className="rounded-md border border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
         {text.green || "Green"}
      </button>
    </div>
  )
}
