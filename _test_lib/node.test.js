'use strict';

const Node = require('../lib/node.js');

describe ('Node Module', () => {
  it('constructor()', () => {
    let value = Number;
    let node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
