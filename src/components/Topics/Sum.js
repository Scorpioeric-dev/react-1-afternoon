import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }
  updateNumber1(val) {
    this.setState({ number1: val });
  }
  updateNumber2(val) {
    this.setState({ number2: val});
  }

  add(num1, num2) {
   let sum = +num1 + +num2  
    this.setState({sum})  
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          type="number"
          onChange={e => this.updateNumber1(e.target.value)}
        ></input>
        <input
          className="inputLine"
          type="number"
          onChange={e => this.updateNumber2(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.add(this.state.number1, this.state.number2)}
        >
          Add
        </button>
        <span className="resultsBox">Sum:{this.state.sum}</span>
      </div>
    );
  }
}
