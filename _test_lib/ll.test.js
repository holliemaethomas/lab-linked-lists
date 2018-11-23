
'use strict';

let LL = require ('../lib/ll.js')

describe('Linked List', () => {

  it('constructor()', () => {
    let list = new LL();
    expect(list.head).toBeNull();
  });
  it('append()', () => {
    let list = new LL();
    let firstValue = 'First One';
    list.append(firstValue);
    expect(list.head.value).toEqual(firstValue);
    let newValue = '';
    list.append(newValue);
    expect(list.head.value.).toEqual(firstValue);
    let nextPlace = '';
    list.append(nextPlace);

  });
  it('prepend()', () => {
    let list = new LL();
    let firstValue = 'first Value';
    List.prepend(firstValue);
    let nextValue = 'next Value';
    list.prepend(nextValue);
    expect(nextValue).toEqual(list.head.value);
  }); 

  it('reverse()', () => {
    let list = new LL();
    expect(curr.next).toEqual(prev); 
  });

  it('remove()', () => {
    let list = new LL();
    expect(value).toEqual(null);

  })
  
 

  
});
