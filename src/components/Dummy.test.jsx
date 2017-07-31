import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import Dummy from './Dummy.jsx';

describe('<Dummy/>', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });
  afterEach(() => {
    sandbox.restore();
  });

  describe('render methods', () => {
    it('should render correctly', () => {
      let onButtonClickStub = sandbox.stub();
      const content = 'I am learning to test React components';
      let wrapper = shallow(
        <Dummy content={content}
          onButtonClick={onButtonClickStub}
        />
      );
      expect(wrapper.find('.content').length).toBe(1);
      expect(wrapper.find('.content').text()).toBe(content);
    });
  });

  describe('button', () => {
    it('should work correctly', () => {
      let onButtonClickStub = sandbox.stub();
      let wrapper = shallow(
        <Dummy content="something"
          onButtonClick={onButtonClickStub}
        />
      );
      wrapper.find('button').simulate('click');

      expect(onButtonClickStub.calledOnce).toBe(true);
    });
  });
});
