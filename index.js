/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Screen/App';
import './src/Config/LogConfig';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
