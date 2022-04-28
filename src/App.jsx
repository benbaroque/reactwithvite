// import { Component } from 'react'
import { Component, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const message = "Hello Be1n22";
  console.log("Render")

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

class AppClass extends Component {
  message = "Hello Class Component";

  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }

  setCount(newValue) {
    this.setState({ count: newValue });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.message}</p>
          <p>
            <button type="button"
              onClick={() => this.setCount(this.state.count + 1)}>
              count is: {this.state.count}
            </button>
          </p>
        </header>
      </div>
    )
  };
}

export default App