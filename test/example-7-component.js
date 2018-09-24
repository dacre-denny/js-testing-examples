/*
Mock UI component
*/

import React from 'react';
import { mount, configure } from 'enzyme';
import {expect, assert} from 'chai';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Foo from '../src/components/foo';

describe('<Foo/>', function () {

  it('should update message when button clicked', function () {

    const wrapper = mount(<Foo/>);
    
    assert.equal(wrapper.find('p').text('not clicked'), 'not clicked')
    
    wrapper.find('button').simulate('click');
    
    assert.equal(wrapper.find('p').text('not clicked'), 'clicked!')
  });
});