import React from 'react';
import { Link } from 'react-router-dom';

function Header({ user }) {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {user ? (
            <>
              <li><Link to="/create-blog">Create Blog</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
      {user && <p>Welcome, {user.username}!</p>}
    </header>
  );
}

export default Header;
