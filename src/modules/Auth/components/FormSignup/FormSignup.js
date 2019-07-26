import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Styles
import { styles } from './FormSignupStyle';
import { MainInput, ButtonSubmit } from '~/components';

class FormSignup extends Component {
  state = {};

  render() {
    return (
      <View style={styles.wrapperForm}>
        <View style={styles.row}>
          <MainInput label="NOME" autoCapitalize />
          <MainInput label="SOBRENOME" autoCapitalize />
        </View>
        <View style={styles.row}>
          <MainInput label="EMAIL" keyboard="email-address" />
        </View>
        <View style={styles.row}>
          <MainInput label="SENHA" secureText />
        </View>
        <View style={styles.row}>
          <MainInput label="SENHA NOVAMENTE" secureText />
        </View>
        <View style={styles.row}>
          <ButtonSubmit text="CRIAR CONTA" />
        </View>
      </View>
    );
  }
}

FormSignup.defaultProps = {};

FormSignup.propTypes = {};

export default FormSignup;
