import React from 'react';
import './NavigationItems.css';
import { NavLink } from 'react-router-dom'


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px',
  textDecoration: 'none',
  color: 'white',
}

const NavigationItems = (props) => (
  <ul className="navigation-items">
    <NavLink to="/" activeClassName="selected" exact style={link}>Builder</NavLink>
    <NavLink to="/teams" activeClassName="selected" exact style={link}>My Teams</NavLink>
      { !props.isAuthenticated ? <NavLink to="/auth" activeClassName="selected" exact style={link}>Sign Up</NavLink>
      : <NavLink to="/logout" activeClassName="selected" exact style={link}>Log Out</NavLink>
    }
  </ul>
)

export default NavigationItems
