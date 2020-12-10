var http = require('http');
var fs = require('fs');

const server = http.createServer((req, res) => {
    const url=req.url;
    if(url==="/"){
        res.write("<html>");
        res.write("<head><title>Pictures</title></head>");
        res.write("<body><h1>hi html</h1></body>");
        res.write("</html>");
        return res.end();
    }
    if(url==="/images") {
        res.writeHead(200, {'content-type': 'image/jpg'});
        fs.createReadStream('../images/image1.png').pipe(res);
    }
    })
server.listen(3000)


console.log('server running at 3000');