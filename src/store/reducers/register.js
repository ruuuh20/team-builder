import * as actionTypes from '../actions/actionTypes'

const initialState = {
  teams: [],
  loading: false,
  registered: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_INIT:
      return {
        ...state,

        registered: false
      }

    case actionTypes.REGISTER_TEAM_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.REGISTER_TEAM_SUCCESS:
      const newTeam = {
        ...action.regInfo,
        id: action.regId
      }
      return {
        ...state,
        loading: false,
        registered: true,
        teams: state.teams.concat(newTeam)
      };
    case actionTypes.REGISTER_TEAM_FAIL:
      return {
        ...state,
        loading: false
      }
    case actionTypes.FETCH_REGISTERED_START:
      return {
        ...state,
        loading: true
      }

    case actionTypes.FETCH_REGISTERED_SUCCESS:
      return {
        ...state,
        teams: action.teams,
        loading: false
      };
    case actionTypes.FETCH_REGISTERED_FAIL:
      return {
        ...state,
        loading: false
      }
      default:
        return state;
  }

}

export default reducer
