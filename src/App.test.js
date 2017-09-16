import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('components', function () {
  describe('<App />', function () {
    global.document = {
      getElementById: function () {
        return {
          on: function () {
          }
        };
      }
    };

  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
  });
});

