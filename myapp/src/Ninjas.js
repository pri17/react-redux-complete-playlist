import React, { Component } from 'react'

class Ninjas extends Component{
  render(){
    const {name,age} = this.props;
    return (
      <div className="ninja">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Belt: Black</div>
      </div>
    )
  }
}

export default Ninjas