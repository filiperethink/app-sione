import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { SafeAreaView, Image, View } from 'react-native';

// Redux
// import { connect } from 'react-redux';

// Styles
import { styles } from './AuthScreenStyle';

import { Images } from '~/assets';
import { FancyTitle } from '~/components/FancyTitle';
import { FormSignup } from '../components';

const { logos } = Images;

class Auth extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={logos.logoSione}
        />
        <View style={styles.inner}>
          <FancyTitle title="CADASTRO" />
          <FormSignup />
        </View>
      </SafeAreaView>
    );
  }
}

Auth.defaultProps = {};

Auth.propTypes = {};

export default Auth;
