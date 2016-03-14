/* @flow */
/* eslint-disable no-magic-numbers */
import common from './common';
import {text} from './mixins';

/**
 * CJK Font Size Elevation {10, 11, 12, 13, 15, 17, 21, 24, 34}
 */
const Typography = {
  body: Object.assign({}, common.font, text(15), {fontWeight: '400'}),
  caption: Object.assign({}, common.font, text(13), {fontWeight: '200'}),
  display: Object.assign({}, common.font, text(34), {fontWeight: '400'}),
  headline: Object.assign({}, common.font, text(24), {fontWeight: '700'}),
  heavyBody: Object.assign({}, common.font, text(15), {fontWeight: '700'}),
  lightBody: Object.assign({}, common.font, text(15), {fontWeight: '200'}),
  subHeading: Object.assign({}, common.font, text(17), {fontWeight: '400'}),
  title: Object.assign({}, common.font, text(21), {fontWeight: '700'})
};

export default Typography;
