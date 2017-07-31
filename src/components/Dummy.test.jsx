import React from 'react';
import { shallow } from 'enzyme';

import Dummy from './Dummy.jsx';

describe('<Dummy/>', () => {
  describe('render methods', () => {
    it('should render correctly', () => {
      const content = 'I am learning to test React components';
      let wrapper = shallow(<Dummy content={content} />);
      expect(wrapper.find('.dummy').length).toBe(1);
      expect(wrapper.find('.dummy').text()).toBe(content);
    });
  });
});
