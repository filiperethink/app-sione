import React, { Component } from 'react';
import '~/config/ReactotronConfig';
import { Provider } from 'react-redux';
import store from '~/store/store';
import Routes from '~/routes';
import { SafeAreaView, View } from 'react-native';

class App extends Component {
  componentDidMount() {
    console.log('APP');
  }

  render() {
    const inlineStyle = {
      height: 10,
      backgroundColor: '#8BBE6C',
      width: '100%',
    };
    return (
      <Provider store={store}>
        <SafeAreaView>
          <View style={inlineStyle} />
        </SafeAreaView>
        <Routes />
      </Provider>
    );
  }
}

export default App;
