import React, { Component } from 'react';
import '~/config/ReactotronConfig';
import { Provider } from 'react-redux';
import store from '~/store/store';

import Routes from '~/routes';

class App extends Component {
  componentDidMount() {
    console.log('APP');
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
