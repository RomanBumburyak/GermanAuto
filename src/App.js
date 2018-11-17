import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




const Home = () => (
  <div>
    Home
  </div>
)


const Listings = () => (
  <div>
    Listings
  </div>
)


const Information = () => (
  <div>
    Information
  </div>
)


const MainMenu = () => {
  return (
    <div>

       <Link to= "/Home" >
         <button>  home </button>
       </Link>

       <Link to= "/Listings" >
          <button>  home </button>
       </Link>

       <Link to= "/Information" >
         <button>  home </button>
       </Link>

    </div>

  );
};


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <MainMenu/>

      <div className="AnchorTabs">
       <Route path= "/Components/Home" component = {Home} />
       <Route path= "/Components/Listings" component = {Listings} />
       <Route path= "/Components/Information" component = {Information} />
      </div>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
