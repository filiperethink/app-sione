import React, { Component, Fragment } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
// import Theme from '../../theme';

//  = ['Warning: Async Storage'];

class Preload extends Component {
  componentDidMount = async () => {
    console.log('PRELOAD');
    SplashScreen.hide();
    await this._bootStrap();
  };

  _bootStrap = async () => {
    const { navigation } = this.props;
    try {
      const userToken = await AsyncStorage.getItem('@sione/userToken');
      if (!userToken) {
        navigation.navigate('Auth');
      } else {
        navigation.navigate('App');
      }
    } catch (error) {
      console.log({ error });
    }
  };

  render() {
    return <Fragment />;
  }
}

export default Preload;
