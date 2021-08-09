import React from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

function App(props) {
  function handleClick() {
    alert("I was defined in <App />, but called in <Child />!")
  }
  
  return (<Child onClick={()=>handleClick()} />)
}

function Child(props) {
  return (
    <div>
      <p>This button calls a function passed in as a prop.</p>
      <button onClick={props.onClick}>Press Me!</button>
    </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById("app"))
