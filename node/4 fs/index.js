
const http = require('http');
const fs = require('fs');
const porta = 5000;

const server = http.createServer((req, res) => {
  fs.readFile("index.html", function(err, data) {

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    res.end();

});
});

server.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
