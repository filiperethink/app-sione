import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// Styles
import { styles } from './FancyTitleStyle';

class FancyTitle extends PureComponent {
  state = {};

  render() {
    const { title } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.dash} />
      </View>
    );
  }
}

FancyTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FancyTitle;
