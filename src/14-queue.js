const ListNode = require('../extensions/list-node');
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
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
      count++;
    }
    return count;
  }

  enqueue(element) {
    let current = this.head;
    const item = new ListNode();
    item.value = element;
    item.next = null;
    if (this.head === undefined) {
      this.head = item;
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = item;
    }
  }

  dequeue() {
    let current = this.head;
    const res = current.value;
    let prev;
    let next;
    if (current.next === null) {
      delete this.head;
    } else {
      while (current.next !== null) {
        next = current.next;
        current.value = next.value;
        prev = current;
        current = current.next;
      }
      prev.next = null;
    }
    return res;
  }
}

module.exports = Queue;
