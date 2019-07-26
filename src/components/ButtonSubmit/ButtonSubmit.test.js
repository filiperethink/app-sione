
import React from 'react';
import { shallow } from 'enzyme';
import ButtonSubmit from './ButtonSubmit';

describe('<ButtonSubmit />', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {};
    wrapper = shallow(<ButtonSubmit {...mockProps} />);
  });

  it('should render whithout explode', () => {
    expect(wrapper.length).toBe(1);
  });
});
