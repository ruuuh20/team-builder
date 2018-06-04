import React from 'react';
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => (
  <header className="toolbar">
    <div>Menu</div>
    <Logo height="11%"/>
    <nav>
      <NavigationItems />
    </nav>

  </header>

)

export default Toolbar;
