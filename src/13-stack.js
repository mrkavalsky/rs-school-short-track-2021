/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    const keys = Object.keys(this);
    this[keys.length] = element;
  }

  pop() {
    const keys = Object.keys(this);
    const value = this[keys.length - 1];
    delete this[keys.length - 1];
    return value;
  }

  peek() {
    const keys = Object.keys(this);
    return this[keys.length - 1];
  }
}

module.exports = Stack;
