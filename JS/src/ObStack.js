// //extends ArrayList<T> ??
// var ObStack = class ObStack {

//   ObStack.serialVersionUID = 1L;

//   function pop() {
//     //returns top item in object stack
//     //removes it
//   }

//   function push(O) {
//     //adds objec O to stack
//   }

//   function peek() {
//     //returns item on top of stack, just to view
//   }
// }

// Stack class
class Stack {
     // Array is used to implement stack
     constructor()
     {
         this.items = [];
     }
}

// push function
function push(element)
{
    // push element into the items
    this.items.push(element);
    return this;
}
    // pop function
function pop()
{
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}
     // peek function
function peek()
{
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
}
     // isEmpty function
function isEmpty()
{
    // return true if stack is empty
    return this.items.length == 0;
}
function printStack()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}

exports.main = function(){
  return new Stack();  
}
 