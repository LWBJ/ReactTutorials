import React, { useState } from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

//This app is a counter app with 3 buttons. One to increment the count, one to decrease it, and one to reset the count.
//This is only one of many ways to implement it. Try out other ways!

function App(props) {
  let [count, setCount] = useState(0)
  
  //Our event handler no longer uses setCount to increase or decrease by 1.
  //The event handler accepts a single value as an argument. It then updates the state to become that value.
  function handleClick(value) {
    setCount(value)
  }
  
  return (
    <div>
      <Display count={count}/>
	  
	  //Each button receives a slightly different event handler. Each calls handleClick with a different argument. 
	  //This allows 3 buttons to have different functions, despite writing only one component and one event handler function. Dont Repeat Yourself!
	  //<Updater /> also receives a 2nd prop called "name". This allows each button to render different text.
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

//<Updater /> still receives an event handler passed in as props
//However, it also receives a 2nd prop called "name". This allows each button to render different text.
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
