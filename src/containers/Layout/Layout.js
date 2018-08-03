import React, {Component} from 'react';
import './Layout.css'

import Aux from '../../hoc/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { connect } from 'react-redux'


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

    <Toolbar
      isAuth={this.props.isAuthenticated}
      toggleClicked={this.SidebarToggleHandler}/>

    <main className="content">
      {this.props.children}
    </main>
    </Aux>
  )}
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
    // if not null, isAuthenticated is true
  }
}

export default connect(mapStateToProps)(Layout);
