import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Google Books
      </Link>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/">Search</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/saved">Saved</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
