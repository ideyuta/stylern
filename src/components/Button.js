/* @flow */
import common from '../common';

const Button = {
  'Button': {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    height: 40,
    justifyContent: 'center'
  },
  'Button-green': {
    backgroundColor: common.color.green700
  },
  'Button-isDisable': {
    backgroundColor: 'transparent',
    borderColor: common.color.gray50
  },
  'Button-red': {
    backgroundColor: common.color.red700
  },
  // Do not linebreak
  'Button/label': Object.assign({}, common.font, {
    fontWeight: '700',
    height: 15
  }),
  'Button/label-isDisable': {
    backgroundColor: 'transparent',
    color: common.color.gray100
  },
  'Button/label-light': Object.assign({}, common.font, {
    color: '#fff',
    fontWeight: '700',
    height: 15
  })
};

export default Button;
