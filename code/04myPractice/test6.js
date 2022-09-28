


var length = 10;

function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn(); // 10
    // arguments: array-like object {0: fn, 1: 1}
    arguments[0](); // 2
  }
};

obj.method(fn, 1);



let theObj = [{ id: 1, body: "Hello world, I am a top level comment (1)", parentId: null },
{ id: 2, body: "Example nested reply (2)", parentId: 1 },
{ id: 3, body: "Another nested reply (3)", parentId: 1 },
{ id: 4, body: "Second top level comment (4)", parentId: null },
{ id: 5, body: "nested reply again (5)", parentId: 4 },
{ id: 6, body: "just another reply (6)", parentId: 4 },
{ id: 7, body: "this is reply (7)", parentId: 4 },
{ id: 8, body: "Three levles deep (8)", parentId: 6 },
{ id: 9, body: "The last reply (9)", parentId: 7 },
{ id: 10, body: "The last reply (10)", parentId: 6 },
{ id: 11, body: "The last reply (11)", parentId: 1 },
{ id: 12, body: "The last reply (12)", parentId: 2 },
{ id: 13, body: "The last reply (13)", parentId: 6 }]

