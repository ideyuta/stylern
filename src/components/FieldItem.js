/* @flow */
import common from '../common';
import typography from '../typography';

const FieldItem = {
  'Field': {
    borderColor: common.color.gray50,
    borderWidth: 0,
    flex: 1,
    height: 76
  },
  'Field/content': {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 12
  },
  'Field/content/suffixLabel': Object.assign({}, typography.body, {
    color: common.color.gray300,
    paddingLeft: 8
  }),
  'Field/content/suffixLabel-isDisable': {color: common.color.gray50},
  'Field/content/value': Object.assign({}, typography.lightBody, {
    flex: 1,
    height: 24
  }),
  'Field/inner': {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  'Field/label': Object.assign({}, typography.heavyBody, {height: 24}),
  'Field/label-isDisable': {color: common.color.gray50}
};

export default FieldItem;
