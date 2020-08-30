import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      x: 1,
      buttons:"Play",
      player: "*"
    };
  }

  handleclick=()=>{
    this.setState({buttons:"play again"})

  }
  handleclick1=()=>{


  }
  render() {
    return (
      <div className="container-box">
        <div className="options-container">
          <div className="options" id="id1" onClick={this.handleclick1}></div>
          <div className="options" id="id2" onClick={this.handleclick2}></div>
          <div className="options" id="id3" onClick={this.handleclick3}></div>
          <div className="options" id="id4" onClick={this.handleclick4}></div>
          <div className="options" id="id5" onClick={this.handleclick5}></div>
          <div className="options" id="id6" onClick={this.handleclick6}></div>
          <div className="options" id="id7" onClick={this.handleclick7}></div>
          <div className="options" id="id8" onClick={this.handleclick8}></div>
          <div className="options" id="id9" onClick={this.handleclick9}></div>
        </div>
    <div className="play-again" onClick={this.handleclick}>{this.state.buttons}</div>
        
      </div>
    );
  }
}

export default App;

// arr = [1,2,3,4,5]
// console.log(arr.reduce((acc,index) => acc + index ))
