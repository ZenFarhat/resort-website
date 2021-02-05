import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Restaurants from "./components/Restaurant/Restaurants";
import RestaurantSite from "./components/Restaurant/RestaurantSite/RestaurantSite";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Book from "./components/Book/Book";
import currySite from "./images/currySite.jpeg";
import SteakSite from "./images/steakSite.jpg";
import sushiSite from "./images/sushiSite.jpg";
import tacoSite from "./images/tacoSite.jpg";
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
          <Route path='/dosa-village'>
            <RestaurantSite
              image={currySite}
              title='Dosa Hut'
              text='Something something test test test test'
            />
          </Route>
          <Route path='/blackrock-grill'>
            <RestaurantSite
              image={SteakSite}
              title='Blackrock Grill'
              text='Something something test test test test'
            />
          </Route>
          <Route path='/sushi-osaka'>
            <RestaurantSite
              image={sushiSite}
              title='Sushi Osaka'
              text='Something something test test test test'
            />
          </Route>
          <Route path='/del-taco'>
            <RestaurantSite
              image={tacoSite}
              title='Del Taco'
              text='Something something test test test test'
            />
          </Route>
          <Route path='/restaurants'>
            <Restaurants />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
