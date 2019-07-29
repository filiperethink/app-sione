import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { SafeAreaView, Image, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// Redux
// import { connect } from 'react-redux';

// Styles
import { styles } from './AuthScreenStyle';

import { Images } from '~/assets';
import { FancyTitle } from '~/components/FancyTitle';
import { FormSignup } from '../components';
import { userService } from '~/services';

const { logos } = Images;

class Auth extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {};

  componentDidMount = () => {
    console.log('AUTH');
  };

  handleSubmitForm = async values => {
    const user = await userService.create(values);
    console.log({ user });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView>
          <SvgUri style={styles.logo} source={logos.logoSvg} />
          <View style={styles.inner}>
            <FancyTitle title="CADASTRO" />
            <FormSignup handleSubmitForm={this.handleSubmitForm} />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

Auth.defaultProps = {};

Auth.propTypes = {};

export default Auth;
