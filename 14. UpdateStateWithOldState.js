import React, { useState } from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

function App(props) {
  let [count, setCount] = useState(0)
  
  function handleClick() {
    //setCount(count + 1)
    //setCount(count + 1)
    //setCount(count + 1)
    
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }
  
  return (
    <div>
      <Display count={count}/>
      <Updater onClick={()=>handleClick()}/>
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
      <p>This button updates the count:</p>
      <button onClick={props.onClick}>Increase</button>
    </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById("app"))
