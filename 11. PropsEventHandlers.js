//This code shows how event handlers are passed as props
//The app contains a button that alerts a message


//<App /> is the parent. The event handler is defined here, then passed to the child as a prop.
function App(props) {

  //event handler
  function handleClick() {
    alert("I was defined in <App />, but called in <Child />!")
  }
  
  //<App /> rendrs <Child />, passing it an event handler as a prop
  //The event handler is passed using an arrow function as a wrapper
  return (<Child onClick={()=>handleClick()} />)
}

//<Child /> receives the event handler as a prop and assigns it to a button
function Child(props) {
  return (
    <div>
      <p>This button calls a function passed in as a prop.</p>
	  
	  {/*as before, the prop can be accessed with props.onClick*/}
      <button onClick={props.onClick}>Press Me!</button>
    </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById("app"))
