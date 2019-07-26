import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

// Styles
import { styles } from './MainInputStyle';

class MainInput extends Component {
  state = {};

  render() {
    const { label, keyboard, autoCapitalize, secureText } = this.props;
    return (
      <View style={styles.wrapperInput}>
        <Text style={styles.labelInput}>{label}</Text>
        <TextInput
          keyboardType={keyboard}
          autoCapitalize={autoCapitalize ? 'words' : 'none'}
          secureTextEntry={secureText}
          style={styles.inputField}
          onChangeText={() => {}}
        />
      </View>
    );
  }
}

MainInput.defaultProps = {
  keyboard: 'default',
  autoCapitalize: false,
  secureText: false,
};

MainInput.propTypes = {
  label: PropTypes.string.isRequired,
  keyboard: PropTypes.string,
  autoCapitalize: PropTypes.bool,
  secureText: PropTypes.bool,
};

export default MainInput;
