import React from 'react'
import './App.css';
import Header from './components/Header';
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';

function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
