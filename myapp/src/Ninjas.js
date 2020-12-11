import React, { Component } from 'react'

class Ninjas extends Component{

  render(){
    const {nn} = this.props;
    const ninjaList = nn.map(nnn => {
      return (
        <div className="ninja" key={nnn.id}>
          <div>Name: {nnn.name}</div>
          <div>Age: {nnn.age}</div>
        </div>
      )
    })

    return (
     <div className="lllist">
       {ninjaList}
     </div>
    )
  }
}

export default Ninjas