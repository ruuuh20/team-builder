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
    
  }
  render() {
    return (
    <Aux>

    <Toolbar />
    <Sidebar open={this.state.showSidebar} closed={this.closeSidebar}/>
    <main className="content">
      {this.props.children}
      </main>
      </Aux>
  )}
}


export default Layout
