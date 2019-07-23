import expect from 'expect';
import initialState from '~/store/initialState';
import reducer from './reducer';
import { FAKE_TYPE } from './types';

describe('Reducer', () => {
  it('should handle SOME_TYPE', () => {
    const red = reducer(initialState, {
      type: FAKE_TYPE,
    });
    expect(red).toEqual('Something');
  });
});
