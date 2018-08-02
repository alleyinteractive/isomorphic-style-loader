/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { describe, it } from 'mocha';
import { expect } from 'chai';
import getCss from '../src/getCss';

// Mock function for returning module content
function toString() {
  return this.map((module) => {
    if (module[1]) {
      return module[1];
    }

    return module;
  }).join('');
}
const module1 = [1, 'body { color: red; }'];
const module2 = [2, '.app { font-family: Helvetica, sans-serif; }'];
const module3 = [3, '.wrapper { display: flex }'];

describe('getCss(styles)', () => {
  it('Convert a module\'s content to a string', () => {
    const modules = [module1];
    modules.toString = toString;
    const styleString = getCss(modules);
    expect(styleString).to.be.ok;
    expect(styleString).to.be.equal(module1[1]);
  });

  it('Dedupe modules by module ID so as not to insert multiple copies of the same styles', () => {
    const modules = [module2, module2, module3];
    modules.toString = toString;
    const styleString = getCss(modules);
    expect(styleString).to.be.ok;
    expect(styleString).to.be.equal(`${module2[1]}${module3[1]}`);
  });
});
