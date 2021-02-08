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
              text='Spicy, rich, flavourful and diverse food. That is all you need to know about Dosa Hut. We were founded in 1942 and are still delivering a modernised take on indian cuisine.'
            />
          </Route>
          <Route path='/blackrock-grill'>
            <RestaurantSite
              image={SteakSite}
              title='Blackrock Grill'
              text='Blackrock grill - come enjoy our delicious steaks & sides in an americanbased cuisine. We are a family-friendly restaurant that caters to everyone.'
            />
          </Route>
          <Route path='/sushi-osaka'>
            <RestaurantSite
              image={sushiSite}
              title='Sushi Osaka'
              text='Need a good fine dining and authentic Japanese experience? Say no more, Sushi Osaka is the place to be.'
            />
          </Route>
          <Route path='/del-taco'>
            <RestaurantSite
              image={tacoSite}
              title='Del Taco'
              text='Tiara covers many bases when it comes to international cuisine. Del Taco is one of the top authentic mexican restaurants, we know you will love our food and atmosphere.'
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
