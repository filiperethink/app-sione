import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import {
  MainContainer,
  Button,
  InputField,
  FancyTitle,
  Block,
} from '~/components';
import { Images } from '~/assets';

const { logos } = Images;

class AuthScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  componentDidMount = () => {
    console.log('AuthScreen');
  };

  render() {
    return (
      <MainContainer>
        <Block>
          <Image source={logos.logoSione} />
        </Block>
        <Block size={2}>
          <FancyTitle title="CADASTRO" />
          {/* <InputField onChangeText={() => {}} />
          <Button text="CRIAR CONTA" onPress={() => {}} /> */}
        </Block>
      </MainContainer>
    );
  }
}

AuthScreen.propTypes = {};

export default AuthScreen;
