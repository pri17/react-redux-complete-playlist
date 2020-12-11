import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state = {
    ninjas:[
      {name: 'AA', age: 12, id:1 },
      {name: 'BB', age:17, id:2 },
      {name: 'CC', age:27, id:3}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas nn = {this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
