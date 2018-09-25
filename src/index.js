import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Counter extends React.Component {
  state = {counter: 1}
  add = () => this.setState(state => ({counter: state.counter + 1}))
  sub = () => this.setState(state=>({counter: state.counter -1}))
  render() {
    return (
      <div>
        <button type="button" onClick={this.sub}>-</button>
        <span>{this.state.counter}</span>
        <button type="button" onClick={this.add}>+</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
