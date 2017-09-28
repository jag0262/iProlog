var IntList = class IntList {
  IntList.empty = null;
  IntList.prototype.head = 0;
  IntList.prototype.tail = null;
  
  function IntList(head){
    this.head = head;
    this.tail = null;
  }
  
  function IntList(X, Xs){
    this.head = X;
    this.tail = Xs;
  }
  
  function isEmpty(Xs){
    return null == Xs;
  }
  
  function head(Xs){
    return Xs.head;
  }
  
  function tail(Xs){
    return Xs.tail;
  
  }
  function cons(X, Xs){
    return new IntList(X, Xs);
  }
  
  function app(xs, Ys){
    var Zs = Ys;
    for(i = xs.length -1; i >=0; i--){
      Zs = cons(xs[i], Zs);
    }
    return Zs;
  }
  //look up how to include (if at all) IntStack class
  function toInts(Xs){
    IntStack is = new Intstack();
    while(!isEmpty(Xs)){
      is.push(head(Xs));
      Xs = tail(Xs);
    }
    return is
  }
  
  function len(Xs){
    return toInts(Xs).size();
  }
  //overridden in java, look into override for js
  function toString(){
    return toInts(this).toString();
  }
 }
