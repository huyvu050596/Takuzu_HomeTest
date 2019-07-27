// Libraries
import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Utilities
import { Colors, Metrics } from '../../../Themes';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const ICOMOON = createIconSetFromIcoMoon(icoMoonConfig);

export default {
  IcoMoon: ({ color = Colors('light').primary, size = 22, name = 'exchange' }) => (
    <ICOMOON name={name} size={size} color={color} />
  ),
  FontAwesome: ({ color = Colors('light').primary, size = 22, name = 'eye' }) => (
    <FontAwesome name={name} size={size} color={color} />
  ),
  Ionicons: ({ color = Colors('light').primary, size = 22, name = 'ios-add' }) => (
    <Ionicons name={name} size={size} color={color} />
  ),
};
