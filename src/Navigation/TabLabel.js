import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ES from 'react-native-extended-stylesheet';
import Icon from '../Components/Common/Icon';
import { Metrics } from '../Themes';
const cusStyle = ES.create({
  Wrap: {
    borderRightColor: '#f0f0f0',
    height: 43,
    width: Metrics.SCREEN_WIDTH / 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  Text: {
    fontSize: 10,
    marginTop: 2,
  },
});

const TabLabel = ({ tintColor, label, style, icon }) => (
  <View style={[cusStyle.Wrap, style]}>
    <View>
      {Icon.IcoMoon({
        name: icon,
        size: 21,
        color: tintColor,
      })}
    </View>
    <Text style={[{ color: tintColor }, cusStyle.Text]}>{label}</Text>
  </View>
);

export default TabLabel;
