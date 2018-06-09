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

const NavigationItems = () => (
  <ul className="navigation-items">
    <NavLink to="/" activeClassName="selected" exact style={link}>Builder</NavLink>
    <NavLink to="/teams" activeClassName="selected" exact style={link}>My Teams</NavLink>
  </ul>
)

export default NavigationItems
