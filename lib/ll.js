const node = require('../lib/node');

class LinkedList {
  constructor () {
    this.head = null;
  }

  append(value) {
    let node = new Node(value); 
    if (!this.head) {
      this.head = node;
      return this;
    }

  prepend(value) {
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
      return this;
    }
    node.next = this.head;
    this.head = node;
  }

  const reverse = (curr, prev) => {
    if (curr.next) {
      let node = new Node(value);
      node = reverse(curr.next, curr);
      curr.next = prev;
      return this; 
    } 
  curr.next = prev;
  return curr; 
  }

  const remove = 

  }




}
