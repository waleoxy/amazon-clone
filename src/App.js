import React from 'react'
import './App.css';
import Header from './components/Header';
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Help } from '@material-ui/icons';

function App() {
  return (

    <Router>
      <div className="App">

        <Switch>
          <Route path="/" exact component={Home}>
            <Header />
            <Navbar />
            <Home />
          </Route>
          <Route path="/checkout" component={Checkout}>
            <Header />
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
