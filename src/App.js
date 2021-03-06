import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout/Layout'
import TeamBuilder from './containers/TeamBuilder/TeamBuilder'
import Register from './containers/Register/Register'
import { Route } from 'react-router-dom'
import SavedTeams from './containers/SavedTeams/SavedTeams';
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'

class App extends Component {
  render() {
    return (
      <div>
      <Layout>

        <Route path="/register" component={Register} />
        <Route path="/teams" component={SavedTeams} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/" component={TeamBuilder} />
      </Layout>


      </div>
    );
  }
}

export default App;
