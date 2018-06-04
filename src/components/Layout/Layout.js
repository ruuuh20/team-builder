import React, {Component} from 'react';
import './Layout.css'

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar'

class Layout extends Component  {
  state= {
    showSidebar: true
  }
  closeSidebar = () => {
    this.setState({
      showSidebar: false
    }
)  }

  SidebarToggleHandler = () => {
    this.setState((prevState) => {
      return { showSidebar:  !this.state.showSidebar };
    })
  }
  render() {
    return (
    <Aux>

    <Toolbar toggleClicked={this.SidebarToggleHandler}/>

    <main className="content">
      {this.props.children}
    </main>
    </Aux>
  )}
}


export default Layout
