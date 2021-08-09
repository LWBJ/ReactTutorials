import React from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

//This code shows how functional components can apply logic and calculations before returning JSX

//The app gets 2 random numbers and finds the average. It also renders a button that alerts the average.
function App(props) {
  
  //The function component contains logic, in this case generating 2 random numbers and storing them to variables
  let num1 = Math.floor(Math.random()*100)
  let num2= Math.floor(Math.random()*100)
  
  //The function component can contain other functions. Event handler functions are defined inside components!
  function alertAverage() {
    alert((num1+num2)/2)
  }
  
  return(
    <div>
      <p>Generate 2 random numbers</p> 
	  
	  //In the return statement, we can use variables defined elsewhere in the function component as per normal
      <p>The first number is {num1}, the second number is {num2}</p>
      <p>The average is {(num1+num2)/2}.</p>
      
	  //This button uses the event handler we defined inside the component itself
      <button onClick={alertAverage}>Alert the average</button>
    </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById("app"))
