import { AppRegistry, YellowBox } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import Theme from '~/theme';
YellowBox.ignoreWarnings([
  'Encountered an error loading page',
  'Warning: Async Storage',
]);

console.disableYellowBox = true;
Theme.initTheme();
AppRegistry.registerComponent(appName, () => App);
