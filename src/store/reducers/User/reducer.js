import initialState from '~/store/initialState';
import {
  ON_CREATE_USER_REQUEST,
  ON_CREATE_USER_SUCCESS,
  ON_CREATE_USER_FAILED,
} from './types';

const UserReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case ON_CREATE_USER_REQUEST:
      return {
        ...state,
        isCreating: true,
        isCreated: false,
      };
    case ON_CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreating: false,
        isCreated: true,
      };
    case ON_CREATE_USER_FAILED:
      return {
        ...state,
        isCreating: false,
        isCreated: false,
      };
    default:
      return state;
  }
};
export default UserReducer;
