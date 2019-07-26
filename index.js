import { AppRegistry, YellowBox } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import Theme from '~/theme';
YellowBox.ignoreWarnings([
  'Encountered an error loading page',
  'Warning: Async Storage',
]);
Theme.initTheme();
AppRegistry.registerComponent(appName, () => App);
