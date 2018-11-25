'use strict';

let Node = require('../lib/node.js');

class LinkedList {
  constructor () {
    this.head = null;
  }

  append (value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
    return this;
  }
  prepend (value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    node.next = this.head;
    this.head = node;
  }

  reverse () {
    let curr = this.head;
    let next = null;
    let prev = null;
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  remove (value) {
    if (this.head.value === value) {
      this.head = this.head.next;
    }
    let curr = this.head;
    let prev = null;
    if (curr.value === value) {
      curr.value = prev;
    }

    while (!curr.value === value) {
      curr = this.next;
      if (curr.next.value === value) {
        prev.next = curr.next;
        break;
      }
      prev = curr;
      curr = curr.next;
    }
    console.log(this);
  }

  insertbBefore (searchValue, newValue) {
    let curr = this.head;
    while (curr.next) {
      if (curr.next.value === searchValue) {
        let newNode = new Node(newValue);
        newNode.next = curr.next;
        curr.next = newNode;
        return this;
      }
    }
  }

  insertAfter (searchValue, newValue) {
    let curr = this.head;
    while (curr.next) {
      if (curr.value === searchValue) {
        let newNode = new Node(newValue);
        newNode.next = curr.next;
        curr.next = newNode;
        return this;
      }
    }
  }
}

module.exports = LinkedList;
