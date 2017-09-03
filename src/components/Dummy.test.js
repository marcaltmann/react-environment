import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { setupIntegrationTest } from '../utils';
import error from '../reducers/error';
import Dummy from './Dummy';

describe('<Dummy/>', () => {
  let store, dispatchSpy;

  beforeEach(() => {
    ({ store, dispatchSpy } = setupIntegrationTest({ error }));
  });

  describe('component behaviour', () => {
    it('should render correctly', () => {
      const sut = mount(
        <Provider store={store}>
          <Dummy />
        </Provider>
      );

      expect(sut.find('p').text()).toEqual('No error');
      sut.find('button').at(0).simulate('click');
      expect(sut.find('p').text()).toEqual('Error: Something went wrong');
      sut.find('button').at(1).simulate('click');
      expect(sut.find('p').text()).toEqual('No error');
    });
  });
});
