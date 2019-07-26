import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

// Modules
import AuthScreen from '~/modules/Auth/screens/AuthScreen';
import Preload from '~/modules/Preload';

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
  Signup: AuthScreen,
});

const Nav = createAppContainer(
  createSwitchNavigator(
    {
      Preload: PreloadStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Preload',
    },
  ),
);

export default Nav;
