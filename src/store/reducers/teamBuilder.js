import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

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
    const updatedElement = { [action.elementName]: state.elements[action.elementName] + 1 }
    const updatedElements = updateObject(state.elements, updatedElement )
    const updatedState = {
      elements: updatedElements,
      totalPoints: state.totalPoints + ELEMENT_POINTS[action.elementName]

    }
      return updateObject(state, updatedState)
    case actionTypes.REMOVE_ELEMENT:
      return {
        ...state,
        elements: {
          ...state.elements,
          [action.elementName]: state.elements[action.elementName] - 1
        },
        totalPoints: state.totalPoints - ELEMENT_POINTS[action.elementName]
      }
    case actionTypes.SET_ELEMENTS:
      return {
        ...state,
        elements: action.elements,
        error: false,
        totalPoints: 10
      }
    case actionTypes.FETCH_ELEMENTS_FAILED:
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }

}

export default reducer
