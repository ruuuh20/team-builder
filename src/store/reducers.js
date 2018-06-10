import * as actionTypes from './actions';

const initialState = {
  elements: {
    defender: 0,
    midfielder: 0,
    forward: 0,
    goalkeeper: 0
  },
  totalPoints: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ELEMENT:
      return {
        ...state,
        elements: {
          ...state.elements,
          [action.elementName]: state.elements[action.elementName] + 1
        }
      }
    case actionTypes.REMOVE_ELEMENT:
      return {
        ...state,
        elements: {
          ...state.elements,
          [action.elementName]: state.elements[action.elementName] - 1
        }
      }
    default:
      return state;
  }

}

export default reducer
