import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import nock from 'nock';
import { setupIntegrationTest, flushAllPromises } from '../utils';
import message from '../reducers/message';
import Message from './Message';

describe('<Message/>', () => {
  let store, dispatchSpy, flushThunks;

  beforeEach(() => {
    ({ store, dispatchSpy, flushThunks } = setupIntegrationTest({ message }));
  });
  afterEach(() => {
    nock.cleanAll();
  });

  describe('component behaviour', () => {
    it('should render correctly', async () => {
      const sut = mount(
        <Provider store={store}>
          <Message />
        </Provider>
      );

      expect(sut.find('p').text()).toEqual('');

      //await flushAllPromises();

      await flushThunks.flush();

      expect(sut.find('p').text()).toEqual('Hello World!');

      // Check if the correct action has been dispatched
      expect(dispatchSpy).toBeCalledWith({
        type: 'message/fetch/success',
        payload: {
          message: 'Hello World!',
        },
      });

      // Check if the state has changed
      expect(store.getState().message).toEqual('Hello World!');
    });
  });
});
