import axios from '../../axios-file';
import * as actionTypes from  './actionTypes';

export const addElement = (name) => {
  return {
    type: actionTypes.ADD_ELEMENT,
    elementName: name
  }
}

export const removeElement = (name) => {
  return {
    type: actionTypes.REMOVE_ELEMENT,
    elementName: name
  }
}


//synch
export const setElements = (elements) => {
  return {
    type: actionTypes.SET_ELEMENTS,
    elements: elements
  }
}

export const fetchElementsFailed = () => {
  return {
    type: actionTypes.FETCH_ELEMENTS_FAILED
  }
}


//asynch
export const initElement = () => {
  return dispatch => {
    axios.get('https://react-project-1-cddb1.firebaseio.com/elements.json')
      .then(response => {
        dispatch(setElements(response.data))
      })
      .catch(error => {
        dispatch(fetchElementsFailed());
      })
  }
}
