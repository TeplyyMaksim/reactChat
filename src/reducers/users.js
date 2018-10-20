import * as actionTypes from '../constants/ActionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      const { name, id } = action;

      return state.concat([{
        name,
        id,
      }]);
    case actionTypes.USERS_LIST:
      return action.users;
    default:
      return state;
  }
}

export default users;