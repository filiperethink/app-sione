import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Title } from './styled';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  componentDidMount = () => {
    console.log('HOME');
  };

  render() {
    return (
      <Container>
        <Title>HomeScreen</Title>
      </Container>
    );
  }
}

HomeScreen.propTypes = {};

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(HomeScreen);
