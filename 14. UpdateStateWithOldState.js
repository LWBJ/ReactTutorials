//This code shows the proper way to implement state changes that update based on the previous value. 
//This app is the same counter app as before.

function App(props) {
  let [count, setCount] = React.useState(0)
  
  //The event handler now calls setCount 3 times in a row. However, only one of the implementations achieve the desired results
  //Comment out the code and see what happens in each implementation
  function handleClick() {
    //setCount(count + 1)
    //setCount(count + 1)
    //setCount(count + 1)
    
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
	//In the proper method, setCount accepts a callback function. 
	//This callback has a single argument, which is the previous state. It returns what the new state will be.
  }
  
  return (
    <div>
      <Display count={count}/>
      <Updater onClick={()=>handleClick()}/>
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

function Updater(props) {
  return (
    <div>
      <p>This button updates the count:</p>
      <button onClick={props.onClick}>Increase</button>
    </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById("app"))
