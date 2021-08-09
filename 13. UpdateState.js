import React, { useState } from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

//This code shows how to update state in React using hooks
//This app shows a count and a button. On pressing the button, the count increases.
//Now we, look at how to update state using an event handler


//<App /> is the parent. The event handler which updates the state is defined here.
function App(props) {
  let [count, setCount] = useState(0)
  
  //This is the event handler. It simply calls setCount() to update state.
  //This function will be passed as an event handler to <Updater />
  function handleClick() {
    setCount(count + 1)
  }
  
  return (
    <div>
      <Display count={count}/>
	  
	  //Event handler is passed to <Updater /> as a prop
      <Updater onClick={()=>handleClick()}/>
    </div>
  )
}

//Same as before. <Display /> renders the data passed in as text
function Display(props) {
  return(
    <div>
      <h2>This is the count:</h2>
      <h1>{props.count}</h1>
    </div>
  )
}


//Updater renders a button. The event handler for the button is passed in via props. 
function Updater(props) {
  return (
    <div>
      <p>This button updates the count:</p>
      <button onClick={props.onClick}>Increase</button>
    </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById("app"))
