import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './components/home.js'
import Search from './components/search.js'
import ArtistDetail from './components/artistDetail.js'

function App() {
  return (
    <div className="App">
        <BrowserRouter> 
          <div className="contentWrapper">
            <div className="sideContent">
              <ul>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/search">Search</Link></li>
              </ul>
            </div>
            
          </div>
          <Route exact path="/" render={() => (
            <Home></Home>
          )}/>
          <Route path="/search" render={() => (
            <Search></Search>
          )}/>
           <Route path="/artists/" render={(props) => (
            <ArtistDetail {...props}></ArtistDetail>
          )}/>
        </BrowserRouter>


    </div>
  );
}

export default App;
