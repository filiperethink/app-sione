import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

// Modules
import AuthScreen from '~/modules/Auth/screens/AuthScreen';
import Preload from '~/modules/Preload';
import UserScreen from './modules/User/screens/UserScreen';

const PreloadStack = createStackNavigator(
  {
    Preload,
  },
  {
    transparentCard: true,
    headerMode: 'none',
    header: null,
    cardStyle: {
      backgroundColor: '#FFFFFF',
    },
  },
);

const AuthStack = createStackNavigator({
  Signin: AuthScreen,
});

const UserStack = createStackNavigator({
  Signup: UserScreen,
});

const Nav = createAppContainer(
  createSwitchNavigator(
    {
      Preload: PreloadStack,
      Auth: AuthStack,
      User: UserStack,
    },
    {
      initialRouteName: 'Preload',
    },
  ),
);

export default Nav;
