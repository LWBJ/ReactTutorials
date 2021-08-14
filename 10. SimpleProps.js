//This code shows how props can be passed from a parent component to a child component
//The app states what the old and new favourite colors and numbers are.


//This is <App />, the parent component. It renders <Display />, passing props to it.
function App(props) {
  let newFavColor = "blue"
  let newFavNum = 3
  
  return(
    <div>
      <h2>Old favourites</h2>
	  {/*Props are passed to <Display />. The syntax is very similar to HTML attributes.*/}
      <Display favColour="yellow" favNum={2} />
	  
      <h2>New favourites</h2>
	  {/*Props can be passed as variables, or directly as a string or number*/}
      <Display favColour={newFavColor} favNum={newFavNum} />
    </div>
  )
}

//<Display /> accepts data as props. It then renders text stating what the favourite color and favourite number is
function Display(props) {
  return (
    <div>
	  {/*Props can be accessed with props.propName*/}
      <p>My favourite colour is {props.favColour}</p>
      <p>My favourite number is {props.favNum}, it is an {props.favNum%2===0?"even":"odd"} number</p>
    </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById("app"))
