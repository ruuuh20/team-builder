import * as actionTypes from '../actions/actionTypes';

const initialState = {
  elements: null,
  totalPoints: 10,
  error: false
};

const ELEMENT_POINTS = {
  goalkeeper: 30,
  midfielder: 45,
  forward: 50,
  defender: 40
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ELEMENT:
      return {
        ...state,
        elements: {
          ...state.elements,
          [action.elementName]: state.elements[action.elementName] + 1
        },
        totalPoints: state.totalPoints + ELEMENT_POINTS[action.elementName]
      }
    case actionTypes.REMOVE_ELEMENT:
      return {
        ...state,
        elements: {
          ...state.elements,
          [action.elementName]: state.elements[action.elementName] - 1
        },
        totalPoints: state.totalPoints - ELEMENT_POINTS[action.elementName]
      }
    default:
      return state;
  }

}

export default reducer
