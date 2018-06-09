import React, { Component } from 'react';
import axios from '../../axios-file.js'
import Save from '../../components/Register/Save';
import withError from '../../hoc/withError/withError'

class SavedTeams extends Component {
  state = {
    savedteams: [],
    loading: true
  }
  componentDidMount() {
    axios.get('/teams.json')
      .then(response => {
        const fetchedTeams = [];
        for (let key in response.data) {
          fetchedTeams.push({
            ...response.data[key],
            id: key
          })
        }
        console.log(response.data)
        this.setState({
          savedteams: fetchedTeams,
          loading: false

        })

      })
      .catch(error => {
        this.setState({
          loading: false
        })
      })

  }
  render() {
    return (
      <div>
        {this.state.savedteams.map(team => (
          <Save key={team.id}
          elements={team.elements}
          points={team.points} />
        )
      )

        }

      </div>
    )
  }

}

export default withError(SavedTeams, axios);
