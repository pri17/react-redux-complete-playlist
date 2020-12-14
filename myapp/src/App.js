import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinjas from './AddNinjas';

class App extends Component {
  state = {
    ninjas:[
      {name: 'AA', age: 12, id:1 },
      {name: 'BB', age:17, id:2 },
      {name: 'CC', age:27, id:3}
    ]
  }

  addNinja = (nin) =>{
      console.log(nin);
      nin.id = Math.random();
      let newNin = [...this.state.ninjas,nin];//add new element to the copy of the original list
      this.setState({
        ninjas:newNin
      })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas nn = {this.state.ninjas}/>
        <AddNinjas addNinja = {this.addNinja}></AddNinjas>
      </div>
    );
  }
}

export default App;
