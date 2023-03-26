function sum(a,b) {
    return arguments.length === 2   //were two arguments passed?
      ? a+b                         //yes: return their sum
      : function(b) { return a + b; }                  //no:  return a function
  };
  
  console.log(sum(3)(5));
  console.log(sum(3,5));

  let uuid = self.crypto.randomUUID();
  console.log(uuid);
  