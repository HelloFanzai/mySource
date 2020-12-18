var http = require('http');
var fs = require('fs');

const server = http.createServer(function(req, res){
    const url = req.url;
    if (url === "/") {
        res.write("<h1>HI World<h1>");
        return res.end();
    }
    if (url === "/images") {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        fs.createReadStream('../images/image12.png').pipe(res);
    }else {
        res.statusCode = 404;
        res.end();
    }
    

})


server.listen(3000)


console.log('server running at 3000');