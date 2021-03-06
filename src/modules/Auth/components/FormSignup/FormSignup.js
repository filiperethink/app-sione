import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
// Styles
import { styles } from './FormSignupStyle';
import { MainInput, ButtonSubmit } from '~/components';

class FormSignup extends Component {
  state = {};

  renderFields = params => {
    const {
      errors,
      setFieldTouched,
      touched,
      handleChange,
      handleSubmit,
      isValid,
    } = params;

    return (
      <View style={styles.wrapperForm}>
        <View style={styles.row}>
          <MainInput
            label="EMAIL"
            keyboard="email-address"
            error={touched.email && errors.email}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            errorText={touched.email && errors.email && errors.email}
            name="firstName"
          />
        </View>
        <View style={styles.row}>
          <MainInput
            label="SENHA"
            secureText
            error={touched.password && errors.password}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            errorText={touched.password && errors.password && errors.password}
            name="password"
          />
        </View>
        <View style={styles.row}>
          <ButtonSubmit
            disabled={!isValid}
            onPress={handleSubmit}
            text="ACESSAR AGORA"
          />
        </View>
      </View>
    );
  };

  render() {
    const { handleSubmitForm } = this.props;
    const validationAdress = yup.object().shape({
      email: yup
        .string()
        .email('Insira um email válido.')
        .required('Email é Obrigatório.'),
      password: yup
        .string()
        .matches(
          /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
          'Necessário letras maiúsculas, minúsculas e números.',
        )
        .min(6, 'Minimo 6 caracteres')
        .required('Password é Obrigatório'),
    });
    return (
      <Fragment>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmitForm}
          validationSchema={validationAdress}
          render={props => this.renderFields(props)}
        />
      </Fragment>
    );
  }
}

FormSignup.defaultProps = {};

FormSignup.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};

export default FormSignup;
