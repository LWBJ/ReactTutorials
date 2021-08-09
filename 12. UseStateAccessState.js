import React, { useState } from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

function App(props) {
  let [count, setCount] = useState(0)
  
  return (
    <div>
      <Display count={count}/>
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
 
ReactDOM.render(<App />, document.getElementById("app"))
