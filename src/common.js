/* @flow */
import React from 'react-native';
import {color, layouts} from './constants';

const common = {
  color,
  font: {
    color: color.gray900,
    fontFamily: 'System',
    fontSize: 15
  },
  hairlineWidth: React.StyleSheet.hairlineWidth,
  hr: {
    backgroundColor: color.gray20,
    height: 2,
    marginVertical: 16
  },
  layouts
};

export default common;
