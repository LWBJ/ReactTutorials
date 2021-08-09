import React from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

//This code shows how different components can be defined and nested inside each other
//This app only renders text. However, the text is divided into different components


//This is <App />, the parent component. It renders <Header /> and <Footer /> inside of it
function App(props) {
  return(
    <div>
      <Header />
      <p>Hello World!</p>
      <Footer />
    </div>
  )
}

//This is <Header />, it stores a chunk of JSX code. It is rendered by <App />
function Header(props) {
  return (
    <div>
      <h1>My App</h1>
      <p>This is the header!</p>
      <br />
    </div>
  )
}

//This is <Footer />, it also stores a chunk of JSX code. It is also rendered by <App />
function Footer(props) {
  return(
    <div>
      <br />
      <p>This is the footer!</p>
      <p>Thanks for visiting!</p>
    </div>
  )
}

//Only <App /> is directly rendered. <App /> then renders <Header /> and <Footer />
ReactDOM.render(<App />, document.getElementById("app"))
