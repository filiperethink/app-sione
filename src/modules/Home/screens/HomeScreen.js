import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// Redux
import { connect } from 'react-redux';

// Styles
import { styles } from './HomeScreenStyle';

class Home extends Component {
  state = {};

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

Home.defaultProps = { };

Home.propTypes = { };

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
)(Home);
