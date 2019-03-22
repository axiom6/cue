
import wcl from 'webpack.config.loader.js';
import sfc from 'webpack.config.sfc.js';
import RollEnt from 'roll.ent.js';
import RollVue from 'roll.vue.js';
import Roll    from '../app/roll/rollup.config.js';
import Tdo     from '../app/tdo/rollup.config.js';
import Lay     from '../app/lay/rollup.config.js';

function noop( ...args ) {
  if( args === false ) console.log( args )
}

noop( wcl, sfc, RollEnt, RollVue, Roll, Tdo, Lay );