import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {



  render() {
    return (
      <div>
        <header>RESTy</header>
        <ul>

          <li>
            <Link to="/">
              <a href="/">HOME</a>
            </Link>
          </li>

          <li>
            <Link to="/history">
              <a href="/history">HISTORY</a>
            </Link>
          </li>

          <li>
            <Link to="/help">
              <a href="/help">HELP</a>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default Header;
{/* 
// Link labeled “Home” that links to ‘/’ and shows the search form/results page
// Link labeled “History” that links to ‘/history’ and loads the history page
// Link labeled “Help” that links to ‘/help’ and loads the about us page */}