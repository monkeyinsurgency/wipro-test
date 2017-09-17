import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';
import testData from '../mocks/OWSMockData.json';

describe('<App />', () => {
  const data = testData;
  const config = { containerClassName: 'container-class-name' };

  const scenarios = [
    { description: 'w/o data w/o config', props: {} },
    { description: 'w data w/o config', props: { data } },
    { description: 'w/o data w config', props: { config } },
    { description: 'w data w config', props: { data, config } }
  ];

  scenarios.forEach((scenario) => {
    test(scenario.description, () => {
      const component = create(<App {...scenario.props} />);
      const tree = component.toJSON();
      console.log(tree);
      expect(tree).toMatchSnapshot();
    });
  });
});
