import React, { Component } from 'react';
import axios from '../../axios-file.js'
import Save from '../../components/Register/Save';
import withError from '../../hoc/withError/withError';
import * as actions from '../../store/actions/index';
import{ connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner'

class SavedTeams extends Component {

  componentDidMount() {
    this.props.onFetchRegistered();
  }
  render() {
    let teams = <Spinner />;
    if (!this.props.loading) {
  
      teams = this.props.teams.map(team => (
        <Save key={team.id}
        elements={team.elements}
        points={team.points} />
      )
    )
    }
    return (
      <div>
        {teams}
      </div>
    )
}
}

const mapStateToProps = state => {
  return {
    teams: state.register.teams,
    loading: state.register.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchRegistered: () => dispatch(actions.fetchRegistered())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withError(SavedTeams, axios));
