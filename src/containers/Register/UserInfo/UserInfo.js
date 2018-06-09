import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import './UserInfo.css';
import axios from '../../../axios-file';
import Spinner from '../../../components/UI/Spinner/Spinner'



class UserInfo extends Component {
  state = {
    name: '',
    email: '',
    loading: false
  }

  handleRegister= (event) => {
    event.preventDefault()
    this.setState({
      loading: true
    })
    const team = {
      elements: this.state.elements,
      points: this.props.points,
      user: {
        name: 'Bob',
        email: 'test@test.com'
      }
    }
    axios.post('/teams.json', team)
      .then(response => {
      this.setState({
        loading: false
      })

      this.props.history.push('/')
    })
      .catch(error => this.setState({
        loading: false

      }))

  }

  render() {

    let form = (
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <Button clicked={this.handleRegister}>Register team</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className="user-info">
        <h4>Enter Your information</h4>

        {form}
      </div>
    )
  }

}

export default UserInfo;
