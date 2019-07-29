import {
  ON_CREATE_USER_REQUEST,
  ON_CREATE_USER_SUCCESS,
  ON_CREATE_USER_FAILED,
} from './types';
import { userService } from '~/services';

export const onCreateUserRequest = () => ({ type: ON_CREATE_USER_REQUEST });

export const onCreateUserSuccess = () => ({ type: ON_CREATE_USER_SUCCESS });

export const onCreateUserFailed = error => ({
  type: ON_CREATE_USER_FAILED,
  error,
});

export const onCreateUser = values => async dispatch => {
  dispatch(onCreateUserRequest());
  try {
    const { data } = await userService.create(values);
    dispatch(onCreateUserSuccess());
    return data;
  } catch (error) {
    dispatch(onCreateUserFailed(error.message));
  }
};
