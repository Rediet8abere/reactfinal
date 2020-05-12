import React, { Component } from 'react'

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
        <button onClick = { () => { this.setState({ count: this.state.count + 1 }) } }>Like</button>
        <button onClick = { () => { this.setState({ count: this.state.count - 1 }) } }>DisLike</button>
      </div>
    )
  }
}

export default Like;
