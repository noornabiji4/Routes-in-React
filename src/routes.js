import React, { Component } from 'react';

import { 
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

const Home  = ()=>(
    <h2>Home</h2>
)
const Products = ()=>(
    <h2>Products</h2>
)
const About = ()=>(
    <h2>About</h2>
)

class Details extends Component{
    render(){
        return(
            <Router>
                <div>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ol>
                   <Route path="/" component={Home}/>
                   <Route path="/products" component={Products}/>
                   <Route path="/about" component={About}/>
                </div>
            </Router>
        )
    }
}

export default Details