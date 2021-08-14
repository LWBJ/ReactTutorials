//This code builds upon state and props. It reinforces the React pattern we have already been using.
//The app is a random color generator. It generates a random color, then displays a <div> with that color.
//It also renders a button that re-rolls the color.

function App(props) {
  //Color depends on 3 values, one for red, green and blue. Hence, we need 3 state variables.
  let [red, setRed] = React.useState(66)
  let [green, setGreen] = React.useState(33)
  let [blue, setBlue] = React.useState(99)
 
  //The event handler. It updates red, green and blue with a random value between 0 and 256.
  function handleClick() {
    setRed(Math.floor(Math.random() * 256))
    setGreen(Math.floor(Math.random() * 256))
    setBlue(Math.floor(Math.random() * 256))
  }
  
  //The role of <App /> is only to store data and event handlers. It renders <Display /> and <Updater /> to handle the rest of the functions
  return (
    <div>
      <h1>Random Color App</h1>
	  
      {/*<Display /> is passed the rgb values to render*/}
      <Display r={red} g={green} b={blue} />
	  
	  {/*<Updater /> is passed the event handler to update the state*/}
      <Updater onClick={()=>handleClick()}/>
    </div>
  )
}

//<Display />'s only job is to render the data it is provided. It creates a div with the color based on the rgb values passed in as props.
function Display(props) {
	
  //First, we need to create a string that shows the rgb input. e.g. "rgb(256, 256, 256)"
  let rgbText = "rgb("+props.r+", " + props.g+", " + props.b+")" 
  
  
  //Then we create a style object. This is how you can implement inline CSS using JavaScript
  let styleObject = {
    backgroundColor: rgbText,
    height: "5em",
    width: "50%",
  }
  //The syntax is very similar to writing CSS directly
  //However, as this is JS not CSS, most values must be explicitly written as a string. e.g. just writing 50% but not as a string will throw an error.
  
  
  //Finally, we return JSX
  return (
    <div>
	  {/*This is the syntax for inline styles. The style attribute of the <div> is assigned the styleObject we defined*/}
      <div style={styleObject}>
      </div>
      
      <div>
        <p>The current color is: {rgbText}</p>
      </div>
    </div>
  )
}

//<Updater />'s only role is to render a button that updates the state back in <App />
//It already receives the event handler as a prop and only needs to pass it to a button
function Updater(props) {
  return (
    <div>
      <button onClick={props.onClick}>Re-Roll!</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
