import React, { Component } from 'react';
import './Like.css';

class Like extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render() {
    console.log();
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className = "Like" onClick = { () => { this.setState({ count: this.state.count + 1 }) } }><span>&#128077;</span></button>
        <button className = "DisLike" onClick = { () => { this.setState({ count: this.state.count - 1 }) } }><span>&#128078;</span></button>
      </div>
    )
  }
}

export default Like;
