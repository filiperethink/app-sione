import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

// Styles
import { styles } from './ButtonSubmitStyle';

class ButtonSubmit extends PureComponent {
  state = {};

  render() {
    const { text } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.wrapper}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

ButtonSubmit.defaultProps = {};

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonSubmit;
