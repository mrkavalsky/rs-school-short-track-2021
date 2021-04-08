// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    let count = 1;
    let current = this;
    while (current.next !== null) {
      current = current.next;
      count++;
    }
    return count;
  }

  enqueue(element) {
    let current = this;
    const item = {
      value: element,
      next: null,
    };
    if (this.next === undefined) {
      this.next = null;
      this.value = element;
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = item;
    }
  }

  dequeue() {
    let current = this;
    const item = this.value;
    let prev;
    let next;
    if (this.next === null) {
      delete this.value;
      delete this.next;
    } else {
      while (current.next !== null) {
        next = current.next;
        current.value = next.value;
        prev = current;
        current = current.next;
      }
      prev.next = null;
    }
    return item;
  }
}

module.exports = Queue;
