/*
Mock UI component
*/

import React from 'react';
import { shallow, configure } from 'enzyme';
import {expect, assert} from 'chai';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Avatar from '../src/components/avatar.jsx';

describe('<Avatar/>', function () {

  it('should have avatar class applied to the component', function () {

    const wrapper = shallow(<Avatar/>);
    assert.isTrue(wrapper.at(0).hasClass('avatar'))
  });

  it('should have an image to display the gravatar', function () {

    const wrapper = shallow(<Avatar/>);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should render the correct email address', function () {

    const wrapper = shallow(<Avatar email='hello@company.com'/>);
    assert.equal(wrapper.find('em').text(), 'hello@company.com')
  });
});