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
