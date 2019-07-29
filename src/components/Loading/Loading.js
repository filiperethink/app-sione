import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator } from 'react-native';

// Styles
import { styles } from './LoadingStyle';

class Loading extends Component {
  state = {};

  render() {
    const { text } = this.props;
    return (
      <View style={styles.alignLoading}>
        <ActivityIndicator color="#8BBE6C" size="large" />
        <Text style={styles.textLoading}>{text}</Text>
      </View>
    );
  }
}

Loading.defaultProps = {
  text: 'CARREGANDO AGUARDE',
};

Loading.propTypes = {
  text: PropTypes.string,
};

export default Loading;
