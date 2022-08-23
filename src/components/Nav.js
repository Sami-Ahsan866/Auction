
import React from "react";
import{Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
       <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Careers">Careers</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>

          </ul>
        </nav>
    </div>
  );
};

export default Nav;
