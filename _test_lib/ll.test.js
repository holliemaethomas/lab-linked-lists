
'use strict';

let LL = require('../lib/ll.js');
let list = new LL();
list.append(11);
list.append(22);
list.append(33);

describe('Linked List', () => {
  it('constructor()', () => {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('append()', () => {
    console.log(list);
    expect(list.head.value).toEqual(11);
    expect(list.head.next.value).toEqual(22);
    expect(list.head.next.next.value).toEqual(33);
  });

  it('prepend()', () => { 
    list.prepend(44);
    console.log(list);
    expect(list.head.next.value).toEqual(11);
    expect(list.head.next.next.value).toEqual(22);
    expect(list.head.value).toEqual(44);
  });

  it('reverse()', () => {
    list.reverse();
    expect(list.head.value).toEqual(33);
    expect(list.head.next.value).toEqual(22);
    expect(list.head.next.next.value).toEqual(11);
  });

  it('remove()', () => {
    let value = 33;
    list.remove(value);
    expect(list.head.value).toEqual(22);
  });
  
  it('remove()', () => {
    list.remove(11);
    expect(list.head.value).toEqual(22);

  });
});
