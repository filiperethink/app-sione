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
            label="NOME"
            autoCapitalize
            error={touched.firstName && errors.firstName}
            onChangeText={handleChange('firstName')}
            onBlur={() => setFieldTouched('firstName')}
            errorText={
              touched.firstName && errors.firstName && errors.firstName
            }
            name="firstName"
          />
        </View>
        <View style={styles.row}>
          <MainInput
            label="SOBRENOME"
            autoCapitalize
            error={touched.lastName && errors.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={() => setFieldTouched('lastName')}
            errorText={touched.lastName && errors.lastName && errors.lastName}
            name="lastName"
          />
        </View>
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
          <MainInput
            label="CONFIRME SUA SENHA"
            secureText
            error={touched.passwordConfirmation && errors.passwordConfirmation}
            onChangeText={handleChange('passwordConfirmation')}
            onBlur={() => setFieldTouched('passwordConfirmation')}
            errorText={
              touched.passwordConfirmation &&
              errors.passwordConfirmation &&
              errors.passwordConfirmation
            }
            name="passwordConfirmation"
          />
        </View>
        <View style={styles.row}>
          <ButtonSubmit
            disabled={!isValid}
            onPress={handleSubmit}
            text="CRIAR CONTA"
          />
        </View>
      </View>
    );
  };

  render() {
    const { handleSubmitForm } = this.props;
    const validationAdress = yup.object().shape({
      firstName: yup
        .string()
        .min(3, 'Ao menos 3 Letras')
        .max(15, 'No máximo 15 Letras')
        .required('Nome é Obrigatório.'),
      lastName: yup
        .string()
        .min(3, 'Ao menos 3 Letras')
        .max(15, 'No máximo 15 Letras')
        .required('Sobrenome é Obrigatório.'),
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
      passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password precisa ser idênticos.'),
    });
    return (
      <Fragment>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
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

FormSignup.propTypes = {};

export default FormSignup;
