import React, { Component } from 'react';
import './App.css';

// import Details from './routes'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

const Home = () => (
  <h2>Home</h2>
)
const Products = () => (
  <h2>Products</h2>
)
const About = () => (
  <h2>About</h2>
)
const Profile = () => (
  <h2>About</h2>
)


class App extends Component {

  render() {
    return (

      <Router>
        <div className="nav ">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>

    );
  }
}

export default App;
