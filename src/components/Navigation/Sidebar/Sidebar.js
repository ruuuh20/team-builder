import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import './Sidebar.css';
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const Sidebar = (props) => {

  let classes = ["sdebar", "close"];
  if (props.open) {
    classes = ["sidebar", "open"]
  }

  return (
    <Aux>
    <Backdrop show={props.open} clicked={props.closed}/>
    <div className={classes.join}>
      <Logo />
      <nav>
        <NavigationItems />

      </nav>

    </div>
    </Aux>
  );
}

export default Sidebar;
