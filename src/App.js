import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout/Layout'
import TeamBuilder from './containers/TeamBuilder/TeamBuilder'
import Register from './containers/Register/Register'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
      <Layout>

        <Route path="/register" component={Register} />
        <Route exact path="/" component={TeamBuilder} />
      </Layout>


      </div>
    );
  }
}

export default App;
