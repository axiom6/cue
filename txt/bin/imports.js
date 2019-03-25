

import Ent from 'roll.ent.js';
import Rol from '../../app/rol/pub/bin/rollup.config.js';
import Tdo from '../../app/tdo/pub/bin/rollup.config.js';
import Lay from '../../app/lay/pub/bin/rollup.config.js';

function noop( ...args ) {
  if( args === false ) console.log( args )
}

noop( Ent, Rol, Tdo, Lay );