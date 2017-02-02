import React from 'react';
import chai, { expect } from 'chai'
import Counter from './counter.presentation';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

/**
  This is a test file. We are using enzyme to generate our "wrapper" shell.
  This wrapper is an in-memory representaion of how our elemnet would render
  to DOM.

  We also use chai-enzyme to simplify our testing statements.
**/
describe('Counter Component', () => {
  it('should show the value in its header', () => {
    const wrapper = shallow(<Counter
      value={ 10 }
      onAdd={ () => {} }
      onAddSlowly={ () => {} }
      currentRoles={ ['user'] }
      router={ { authorize: ['user'], push: () => {} } }
      t={ e => e }
    />);
    expect(wrapper.find('h4')).to.contain.text('10');
  });
});
