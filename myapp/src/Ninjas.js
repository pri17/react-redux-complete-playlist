import React, { Component } from 'react'

const Ninjas = ({nn,deleteNinja}) =>{
    const ninjaList = nn.map(ninja => {
      return ninja.age>16 ? ( 
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <button onClick={()=>{deleteNinja(ninja.id)}}>Delete</button>
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