import React, { Component } from 'react'

const Ninjas = (props) =>{
    // const {nn} = props;
    // const ninjaList = nn.map(nnn => {
    //   if(nnn.age>16){
    //   return (
    //     <div className="ninja" key={nnn.id}>
    //       <div>Name: {nnn.name}</div>
    //       <div>Age: {nnn.age}</div>
    //     </div>
    //   )
    //   }
    // })

    const {nn} = props;
    const ninjaList = nn.map(nnn => {
      return nnn.age>16 ? ( 
      <div className="ninja" key={nnn.id}>
        <div>Name: {nnn.name}</div>
        <div>Age: {nnn.age}</div>
    </div> 
    ):(null);

    })

    return (
     <div className="lllist">
       {ninjaList}
     </div>
    )
  }

export default Ninjas