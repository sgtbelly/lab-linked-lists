'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
  }

  prepend(value) {

    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    node.next = this.head;
    this.head = node;
  }

  append(value) {

    let node = new Node(value);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;
    }

    // If we have stuff, need add to end
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;

  }

  reverse(head) {
    let result = null;
    let stack = [];

    let current = head;
    while(current) {
      stack.push(current);
      current = current.next;
    }

    result = stack.pop() || [];
    current = result;

    while(current) {
      current.next = stack.pop();
      current = current.next;
    }
  }

  remove(offset) {
    let current = head;
    let previousNode;
    if(currentNode.offset === offset){
      head = currentNode.next;
    } else {
      while(currentNode.offset !== offset) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }
  }

  serialize() {
    let current = head;


  }

  deserialize() {
    let current = head;

  }
};

class DLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {

    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    node.next = this.head;
    this.head = node;
  }

  append(value) {

    let node = new Node(value);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      this.tail = node;
    } else{
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }}

    append( pos, item) {}
    }
  }

  reverse(){
  let current = this.head;
  let prev = null;
  While(current){
    let next = current.next;
    current.next = prev;
    current.prev = next;
    prev = current;
    current = next;
  }
  this.tail = this.head;
  this.head = prev;
}

  remove(offset){
    let current = ths.head;
    while(current) {
      if (currentNode.data === offset) {
        if (current == this.ead && current == this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current == this.head) {
          this.head = this.head.next
          this.head.prev = null
        } else if (current == this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
      }
      current = current.next
    }
  }

  serialize() {
    let current = head;


  }

  deserialize() {
    let current = head;

  }


}

module.exports = LinkedList;