import React from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

function App(props) {
  
  let num1 = Math.floor(Math.random()*100)
  let num2= Math.floor(Math.random()*100)
  
  function alertAverage() {
    alert((num1+num2)/2)
  }
  
  return(
    <div>
      <p>Generate 2 random numbers</p> 
      <p>The first number is {num1}, the second number is {num2}</p>
      <p>The average is {(num1+num2)/2}.</p>
      
      <button onClick={alertAverage}>Alert the average</button>
    </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById("app"))
