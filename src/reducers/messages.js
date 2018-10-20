import * as actionTypes from '../constants/ActionTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
    case actionTypes.MESSAGE_RECEIVED:
      const { message, author, id } = action;

      return state.concat([
        {
          message,
          author,
          id,
        }
      ]);
  
    default:
      return state;
  }
}

export default messages;