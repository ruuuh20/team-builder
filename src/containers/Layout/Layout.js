import React, {Component} from 'react';
import './Layout.css'

import Aux from '../../hoc/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar'

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



  // <Sidebar open={this.state.showSidebar} closed={this.closeSidebar}/>
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
