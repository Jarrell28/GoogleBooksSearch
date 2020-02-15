import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
