import React, { useState } from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

function App(props) {
  let [count, setCount] = useState(0)
  
  function handleClick(value) {
    setCount(value)
  }
  
  return (
    <div>
      <Display count={count}/>
      <Updater onClick={()=>handleClick(count+1)} name="Increase" />
      <Updater onClick={()=>handleClick(count-1)} name="Decrease" />
      <Updater onClick={()=>handleClick(0)} name="Reset" />
    </div>
  )
}

function Display(props) {
  return(
    <div>
      <h2>This is the count:</h2>
      <h1>{props.count}</h1>
    </div>
  )
}

function Updater(props) {
  return (
    <div>
      <button onClick={props.onClick}>
	    {props.name}
	  </button>
    </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById("app"))
