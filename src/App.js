import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout/Layout'
import TeamBuilder from './containers/TeamBuilder/TeamBuilder'
import Register from './containers/Register/Register'

class App extends Component {
  render() {
    return (
      <div>
      <Layout>
        <TeamBuilder />
        <Register />

      </Layout>


      </div>
    );
  }
}

export default App;
