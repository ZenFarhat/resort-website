import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from './components/Home/Home'
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className='App'>
      <Nav />
      <Switch>
      <Route path='/restaurants'>
            <Main />
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
