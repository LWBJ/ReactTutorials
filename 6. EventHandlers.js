import React from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

//This code shows how event handlers are defined as functions. They can then be passed into JSX.
//This app renders a few buttons that alert different messages.


//A simple function that alerts "Hello!"
function handleClick() {
  alert("Hello!")
}

//A function that echoes different things depending on its arguments
function echo(volume) {
  if (volume === "loud") {
    alert("LOUD!")
  } else if (volume === "soft") {
    alert("shh...")
  }
}

let app = (<div>
    //Renders a button that calls handleClick when pressed
    <p>Button</p>
    <button onClick={handleClick}>Press Me!</button>
    
	//Renders a button that calls an event handler defined inline
    <p>Button but with an inline function</p>
    <button onClick={() => alert("This alert brought to you by the inline function")}>Press Me Too!</button>
    
	//Renders a button that uses an inline function, which then calls the echo() function. 
	//This technique allows you to input different arguments into the same function.
    <p>Buttons but using function inside an inline function</p>
    <button onClick={() => echo("loud")}>
      Loud
    </button>
    
    <button onClick={() => echo("soft")}>
      Soft
    </button>
</div>)
 
ReactDOM.render(app, document.getElementById("app"))
