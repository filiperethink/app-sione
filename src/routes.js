import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';

// Modules
import { HomeScreen } from '~/modules/Home';
import { AuthScreen } from '~/modules/Auth';
import Preload from '~/modules/Preload';

const DraweNav = createDrawerNavigator({
  Home: HomeScreen,
});

const AppStack = createStackNavigator(
  {
    Home: DraweNav,
  },
  {
    header: null,
    headerMode: 'none',
  },
);

const PreloadStack = createStackNavigator(
  {
    Preload,
  },
  {
    transparentCard: true,
    headerMode: 'none',
    header: null,
    cardStyle: {
      backgroundColor: '#857CBF',
    },
  },
);

const AuthStack = createStackNavigator({
  SignIn: AuthScreen,
});

const Nav = createAppContainer(
  createSwitchNavigator(
    {
      Preload: PreloadStack,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Preload',
    },
  ),
);

export default Nav;
