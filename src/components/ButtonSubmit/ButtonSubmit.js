import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

// Styles
import { styles } from './ButtonSubmitStyle';

class ButtonSubmit extends PureComponent {
  state = {};

  render() {
    const { text, disabled, onPress, customStyle } = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.7}
        onPress={onPress}
        style={[
          styles.wrapper,
          disabled && styles.disabledStyle,
          { ...customStyle },
        ]}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

ButtonSubmit.defaultProps = {
  customStyle: {},
};

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  customStyle: PropTypes.instanceOf(Object),
};

export default ButtonSubmit;
