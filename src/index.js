import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import '~/config/ReactotronConfig';
import { Provider } from 'react-redux';
import store from '~/store/store';

import Routes from '~/routes';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
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
