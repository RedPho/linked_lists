class LinkedList {
  constructor(HEAD = null) {
    this.HEAD = HEAD;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.HEAD == null) {
      this.HEAD = newNode;
    } else {
      let pointer = this.HEAD;
      while(pointer.next != null) {
        pointer = pointer.next;
      }
      pointer.next = newNode;
    }
  }

  prepend(value) {
    let newNode = new Node(value);
    let tmp = this.HEAD;
    this.HEAD = newNode;
    this.HEAD.next = tmp;
  }

  size() {
    let currentNode = this.HEAD;
    let size = 0;
    while (currentNode != null) {
      currentNode = currentNode.next;
      size++;
    }
    return size;
  }

  head() {
    return this.HEAD;
  }

  tail() {
    let currentNode = this.HEAD;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    let counter = 0;
    let currentNode = this.HEAD;
    while(counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  pop() {
    let currentNode = this.HEAD;
    while (currentNode.next.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  }

  contains(value) {
    let currentNode = this.HEAD;
    while (currentNode != null) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  find(value) {
    let currentNode = this.HEAD;
    let currentIndex = 0;
    while (currentNode.value != null) {
      if (currentNode.value == value) {
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return null;
  }
  
  tostring() {
    let currentNode = this.HEAD;
    let nodeString = `( ${currentNode.value} )`;
    for (let i = 0; i < this.size()-1; i++) {
      currentNode = currentNode.next;
      nodeString += ` -> ( ${currentNode.value} )`
    }
    nodeString += " -> null"
    return nodeString;
  }

  insertAt(value, index) {
    if (index == 0) {
      this.prepend(value);
      return;
    }
    let newNode = new Node(value);
    let counter = 0;
    let currentNode = this.HEAD;
    let nodeBeforeInserted;
    while(counter < index) {
      nodeBeforeInserted = currentNode;
      currentNode = currentNode.next;
      counter++;
    }
    newNode.next = currentNode;
    nodeBeforeInserted.next = newNode;
  }

  removeAt(index) {
    let counter = 0;
    let currentNode = this.HEAD;
    let nodeBeforeInserted;
    while(counter < index) {
      nodeBeforeInserted = currentNode;
      currentNode = currentNode.next;
      counter++;
    }
    nodeBeforeInserted.next = currentNode.next;
  }
}

class Node{
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}