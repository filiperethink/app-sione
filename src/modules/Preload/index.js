/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { ActivityIndicator, View, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
// import Theme from '../../theme';

//  = ['Warning: Async Storage'];

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
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="#8BBE6C" size="large" />
        <StatusBar barStyle="default" backgroundColor="#8BBE6C" />
      </View>
    );
  }
}

export default Preload;
