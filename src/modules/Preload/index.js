import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import { Loading } from '~/components';

class Preload extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  state = {};

  componentDidMount = () => {
    SplashScreen.hide();
  };

  _bootstrapAsync = async () => {
    const { navigation } = this.props;
    const userToken = await AsyncStorage.getItem('@sione/userToken');
    navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return <Loading />;
  }
}

export default Preload;
