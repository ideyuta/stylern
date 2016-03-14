/* @flow */
import extend from 'extend';
import common from './common';
import typography from './typography';
import * as mixins from './mixins';
import Button from './components/Button';
import FieldItem from './components/FieldItem';
import Navigator from './components/Navigator';

const base = extend({},
  common,
  typography,
  {mixins},
  {Button},
  {FieldItem},
  {Navigator}
);

export default base;
