import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Redux
import { connect } from 'react-redux';

// Styles
import { styles } from './AuthScreenStyle';

import { Images } from '~/assets';
import { FancyTitle } from '~/components/FancyTitle';
import { ButtonSubmit } from '~/components';
import { FormSignup } from '../components';

const { logos } = Images;

class Auth extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {};

  handleSubmitForm = values => {
    console.log({ values });
  };

  goToCreateUser = () => {
    const { navigation } = this.props;
    navigation.navigate('User');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView>
          <SvgUri style={styles.logo} source={logos.logoSvg} />
          <View style={styles.inner}>
            <FancyTitle title="ACESSAR" />
            <FormSignup handleSubmitForm={this.handleSubmitForm} />
            <ButtonSubmit
              text="CRIAR NOVA CONTA"
              onPress={this.goToCreateUser}
              customStyle={styles.onCreateStyle}
            />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

Auth.defaultProps = {};

Auth.propTypes = {};

export default Auth;
