
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() {

    return (
      <div className="header">
        <ul className="nav">
           <li className="nav-item"><NavLink className="nav-link" to='/'>Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to='/add'>Add</NavLink></li>
           <li className="nav-item"><NavLink className="nav-link" to='/burger'>Burger Builder</NavLink></li>
        </ul>

      </div>
    );
  }
}

//https://codepen.io/hoehoe/pen/dReKLX?editors=1010

export default Header;
