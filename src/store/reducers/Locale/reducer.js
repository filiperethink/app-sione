import initialState from '~/store/initialState';
import {} from './types';

const LocaleReducer = (state = initialState.locale, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default LocaleReducer;
