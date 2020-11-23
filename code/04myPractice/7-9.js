process.stdin.resume();
process.stdin.setEncoding('utf8');

var stdin = '';
process.stdin.on('data', function (chunk) {
  stdin += chunk;
}).on('end', function() {
  var lines = stdin.trim().split('\n');
  let test=lines[0].split(",");
  let res=[...new Set(test)];
  console.log(res.join(","))

  
});