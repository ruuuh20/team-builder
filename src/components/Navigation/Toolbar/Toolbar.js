import React from 'react';
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Toggle from '../Sidebar/Toggle/Toggle'

const Toolbar = (props) => (
  <header className="toolbar">
    // <Toggle toggleClicked={props.toggleClicked}/>
    <Logo height="14%"/>
    <nav>
      <NavigationItems isAuthenticated={props.isAuth}/>
    </nav>

  </header>

)

export default Toolbar;
