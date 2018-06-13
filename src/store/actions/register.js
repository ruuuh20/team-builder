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

export const registerTeam = (regInfo) => {
  return dispatch => {
    dispatch(registerTeamStart())
    axios.post('/teams.json', regInfo)
      .then(response => {
        dispatch(registerTeamSuccess(response.data.name, regInfo))
    })
      .catch(error => {
        dispatch(registerTeamFail(error))
      })
  }
}
