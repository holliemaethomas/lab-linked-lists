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
  }

  


}
