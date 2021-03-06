import * as actionTypes from './actionTypes';
import axios from '../../axios-file'

export const registerTeamSuccess = (id, regInfo) => {
  return {
    type: actionTypes.REGISTER_TEAM_SUCCESS,
    regId: id,
    regInfo: regInfo
  }
}

export const registerTeamFail = (error) => {
  return {
    type: actionTypes.REGISTER_TEAM_FAIL,
    error: error
  }
}


export const registerTeamStart = () => {
  return {
    type: actionTypes.REGISTER_TEAM_START
  }
}


//asynch
export const registerTeam = (regInfo, token) => {
  return dispatch => {
    dispatch(registerTeamStart())
    axios.post('/teams.json?auth=' + token, regInfo)
      .then(response => {
        dispatch(registerTeamSuccess(response.data.name, regInfo))
    })
      .catch(error => {
        dispatch(registerTeamFail(error))
      })
  }
}

export const registerInit = () => {
  return {
    type: actionTypes.REGISTER_INIT
  }
}

export const fetchRegisteredSuccess = (teams) => {
  return {
    type: actionTypes.FETCH_REGISTERED_SUCCESS,
    teams: teams
  }
}

export const fetchRegisteredFail = (error) => {
  return {
    type: actionTypes.FETCH_REGISTERED_FAIL,
    error: error
  }
}

export const fetchRegisteredStart = () => {
  return {
    type: actionTypes.FETCH_REGISTERED_START
  }
}

export const fetchRegistered = (token) => {
  return dispatch => {
    dispatch(fetchRegisteredStart());
    axios.get('/teams.json?auth=' + token)
      .then(response => {
        const fetchedTeams = [];
        for (let key in response.data) {
          fetchedTeams.push({
            ...response.data[key],
            id: key
          })
        }

        dispatch(fetchRegisteredSuccess(fetchedTeams))
      })
      .catch(error => {
        dispatch(fetchRegisteredFail(error))
      })
  }
}
