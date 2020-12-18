var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
     const url = req.url;
    if (url === "/") {
        res.write("<h1>HI World<h1>");
        return res.end();
    }
    res.writeHead(200, { 'content-type': 'image/jpg' });
    if (req.url == '/images') {
        fs.readFile("./image311.jpg", "binary", function (err,file) {
            if (err) {
                console.log("=======Error=======");
                res.write("");
                res.end();
            } else {
                res.write(file, "binary");
                res.end();
            }
        })
    }else {
        res.statusCode = 404;
        res.end();
    }
}).listen(3000);
console.log("server on 3000");