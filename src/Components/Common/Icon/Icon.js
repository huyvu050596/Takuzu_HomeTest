// Libraries
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Utilities
import { Colors, Metrics } from '../../../Themes';

export default {
  Ionicons: ({ color = Colors('light').primary, size = 22, name = 'ios-add' }) => (
    <Ionicons name={name} size={size} color={color} />
  ),
};
