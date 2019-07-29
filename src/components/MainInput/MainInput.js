import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

// Styles
import { styles } from './MainInputStyle';

class MainInput extends Component {
  state = {};

  render() {
    const {
      label,
      keyboard,
      autoCapitalize,
      secureText,
      error,
      errorText,
      onChangeText,
      onBlur,
    } = this.props;
    return (
      <View style={!error ? styles.wrapperInput : styles.wrapperInputError}>
        <Text style={!error ? styles.labelInput : styles.labelInputError}>
          {!error ? label : errorText}
        </Text>
        <TextInput
          keyboardType={keyboard}
          autoCapitalize={autoCapitalize ? 'words' : 'none'}
          secureTextEntry={secureText}
          placeholderTextColor={error ? '#f20022' : '#FFF'}
          style={styles.inputField}
          onBlur={onBlur}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

MainInput.defaultProps = {
  keyboard: 'default',
  autoCapitalize: false,
  secureText: false,
  error: false,
};

MainInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  keyboard: PropTypes.string,
  autoCapitalize: PropTypes.bool,
  secureText: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string.isRequired,
};

export default MainInput;
