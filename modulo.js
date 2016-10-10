'use strict';
/* @flow */

var test = require('tape');
var R = require('ramda');

/**
 * Modulo encryption
 *
 * N = R mod M
 *
 * Pay attention as M must be at least as big as the possible numbers of N.
 * That's because if N > M will result in at least one R for two N breaking
 * the bijection function.
 */

var plaintext = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function createModulo (mod,input,noiseFactor) {
  if(mod < input.length) {
    console.log('Warning: mod is too small');
  }

  return input.map((_,index) => (index + noiseFactor) % mod);
}

var ciphertext = createModulo(26,plaintext,3);

test('got not duplicates', t => {
  var ciphertext = createModulo(26,plaintext,3);
  var filtered = R.uniq(ciphertext);
  t.equal(ciphertext.length,filtered.length,'no duplicates');
  t.end();
});


/**
 * Symmetric key encryption
 * Data Encryption Standard (DES) is an example of it.
 * We do not need to keep the algorithm secret; we need to keep only the key secret.
 */
