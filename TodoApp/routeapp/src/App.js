import Navbar from './components/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Post from "./components/post";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
   
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/:post_id' component={Post}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
