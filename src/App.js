import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./components/home.js";
import Search from "./components/search.js";
import ArtistDetail from "./components/artistDetail.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header className="masthead">
          <div className="inner">
            <nav className="nav nav-masthead justify-content-center">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </nav>
          </div>
        </header>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main role="main" className="inner cover">
            <Route exact path="/" render={() => <Home></Home>} />
            <Route path="/search" render={() => <Search></Search>} />
            <Route
              path="/artists/"
              render={(props) => <ArtistDetail {...props}></ArtistDetail>}
            />
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
