import { AppRegistry, YellowBox } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  'Encountered an error loading page',
  'Warning: Async Storage',
]);

AppRegistry.registerComponent(appName, () => App);
