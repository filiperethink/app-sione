import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View, Text } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Redux
import { connect } from 'react-redux';

// Actions
import { onCreateUser } from '~/store/reducers/User/actions';

// Styles
import { styles } from './UserScreenStyle';

import { Images } from '~/assets';
import { FancyTitle, Loading, ButtonSubmit } from '~/components';
import { FormSignup } from '../components';

const { logos } = Images;

class User extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {};

  goToLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('Auth');
  };
  handleSubmitForm = async data => {
    const { handleCreateUser } = this.props;
    await handleCreateUser(data);
  };
  render() {
    const { isCreating, isCreated } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        {isCreating ? (
          <Loading />
        ) : (
          <KeyboardAwareScrollView>
            <SvgUri style={styles.logo} source={logos.logoSvg} />
            <View style={styles.inner}>
              {!isCreated ? (
                <Fragment>
                  <Text style={styles.successText}>
                    CADASTRADO COM SUCESSO!
                  </Text>
                  <ButtonSubmit
                    text="IR PARA LOGIN"
                    onPress={this.goToLogin}
                    customStyle={{ marginTop: 50 }}
                  />
                </Fragment>
              ) : (
                <Fragment>
                  <FancyTitle title="CADASTRO" />
                  <FormSignup handleSubmitForm={this.handleSubmitForm} />
                </Fragment>
              )}
            </View>
          </KeyboardAwareScrollView>
        )}
      </SafeAreaView>
    );
  }
}

User.defaultProps = {};

User.propTypes = {
  handleCreateUser: PropTypes.func.isRequired,
  isCreated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ userState }) => ({
  isCreating: userState.isCreating,
  isCreated: userState.isCreated,
});

const mapDispatchToProps = dispatch => ({
  handleCreateUser: data => dispatch(onCreateUser(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
