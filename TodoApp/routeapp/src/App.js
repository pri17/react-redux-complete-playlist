import Navbar from './components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Post from "./components/post";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
   
      <Navbar/>
      <Route exact path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/:post_id' component={Post}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
