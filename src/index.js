import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import '~/config/ReactotronConfig';
import { Provider } from 'react-redux';
import store from '~/store/store';
import Routes from '~/routes';

class App extends Component {
  componentDidMount() {
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated and will be removed',
      'Encountered an error loading page',
      'Warning: Async Storage',
    ]);
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
