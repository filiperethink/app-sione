import { combineReducers } from 'redux';
import localeState from './reducers/Locale/reducer';
import userState from './reducers/User/reducer';

export default combineReducers({
  localeState,
  userState,
});
