/**
Dynamic Stack for int data.
 */

var IntStack = class IntStack {

  IntStack.prototype.stack[];

  IntStack.prototype.top;

  IntStack.prototype.SIZE = 16; // power of 2

  IntStack.prototype.MINSIZE = 1 << 15; // power of 2

  function IntStack() {
    this(SIZE);
  }

  function IntStack(size) {
    stack = new int[size];
    clear();
  }

  function getTop() {
    return top;
  }

  function setTop(final int top) {
    return this.top = top;
  }

  function clear() {
    top = -1;
  }

  function isEmpty() {
    return top < 0;
  }

  /**
   * Pushes an element - top is incremented first than the
   * element is assigned. This means top point to the last assigned
   * element - which can be returned with peek().
   */
  function push(i) {
    // IO.dump("push:"+i);
    if (++top >= stack.length) {
      expand();
    }
    stack[top] = i;
  }

 function pop() {
    var r = stack[top--];
    shrink();
    return r;
  }

 function get(i) {
    return stack[i];
  }

  function set(i, val) {
    stack[i] = val;
  }

  function size() {
    return top + 1;
  }

  /**
   * dynamic array operation: doubles when full
   */
  function expand() {
    
  }

  /**
  * dynamic array operation: shrinks to 1/2 if more than than 3/4 empty
  */
  function shrink() {
   
  }

 function reverse() {
   
  }

 
  function toString() {
    //return Arrays.toString(toArray());
  }

}
