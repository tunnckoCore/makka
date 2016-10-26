/*!
 * makka <https://github.com/tunnckoCore/makka>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var MiniBase = require('minibase').MiniBase

function Makka (options) {
  if (!(this instanceof Makka)) {
    return new Makka(options)
  }
  MiniBase.call(this, options)
}

MiniBase.extend(Makka)

module.exports = new Makka()
module.exports.Makka = Makka
