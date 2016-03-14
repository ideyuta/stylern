/* @flow */
/* eslint sorting/sort-object-props: 0 */
import Dimensions from 'Dimensions';

export const color = {
  gray20: '#f4f4f6',
  gray50: '#e8e8ee',
  gray100: '#dcdce4',
  gray200: '#d0d0d8',
  gray300: '#c4c4cc',
  gray400: '#b8b8c0',
  gray500: '#808088',
  gray600: '#686870',
  gray700: '#505058',
  gray800: '#38383e',
  gray900: '#202026',
  gray1000: '#08080e',
  red20: '#fee0df',
  red100: '#faa5a3',
  red300: '#f06463',
  red500: '#e0413e',
  red700: '#d32523',
  red900: '#c01513',
  yellow20: '#fdf5d8',
  yellow100: '#faebb6',
  yellow300: '#f5d76b',
  yellow500: '#f2c833',
  yellow700: '#eab701',
  yellow900: '#d2a400',
  green20: '#e9fce3',
  green100: '#b4e99f',
  green300: '#78d45f',
  green500: '#5bc03e',
  green700: '#38a818',
  green900: '#2c920e',
  blue20: '#f0f5ff',
  blue100: '#b4dcfc',
  blue300: '#78b6e8',
  blue500: '#4794d5',
  blue700: '#0278be',
  blue900: '#0062a5'
};


const {height, width} = Dimensions.get('window');

export const layouts = {
  Window: {
    h: height,
    w: width
  }
};
