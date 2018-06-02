import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout'
import TeamBuilder from './containers/TeamBuilder/TeamBuilder'

class App extends Component {
  render() {
    return (
      <div>
      <Layout>
      <TeamBuilder />

      </Layout>


      </div>
    );
  }
}

export default App;
