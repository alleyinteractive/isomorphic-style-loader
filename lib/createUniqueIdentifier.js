'use strict';

// Credit goes to https://github.com/kriasoft/isomorphic-style-loader/pull/40

module.exports = function createUniqueIdentifiers(identifiers) {
  var dupeCount = {};

  return identifiers.map(function (identifier) {
    if (typeof dupeCount[identifier] !== 'undefined') {
      dupeCount[identifier] += 1;
    } else {
      dupeCount[identifier] = 0;
    }

    return dupeCount[identifier] === 0 ? '' + identifier : identifier + '_' + dupeCount[identifier];
  });
};