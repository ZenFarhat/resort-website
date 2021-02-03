import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from './components/Home/Home'
import Restaurants from "./components/Main/Restaurants";
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Book from './components/Book/Book'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className='App'>
      <Nav />
      <Switch>
        <Route path='/Book'>
          <Book />
        </Route>
      <Route path='/About'>
            <About />
          </Route>
      <Route path='/restaurants'>
            <Restaurants />
          </Route>
      <Route path='/'>
            <Home />        
          </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
