/* @flow */
/* eslint-disable no-magic-numbers */
import common from './common';

/**
 * border
 *
 * @param borderColor - border color
 */
export function border(borderColor: string): Object {
  return {
    borderColor,
    borderWidth: common.hairlineWidth * 2
  };
}

/**
 * text
 *
 * @param fontSize - font size
 */
export function text(fontSize: number): Object {
  return {
    fontSize,
    lineHeight: fontSize * 1.6
  };
}
