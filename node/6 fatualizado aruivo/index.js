const http = require('http')
const fs = require('fs')
const porta = 3000;


const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name
    
 if(!name){
    fs.readFile("index.html" , (err, data)=>{
        res.writeHead(200, {"content-type" : "text/html"})
        res.write(data)
        return res.end()

    })
 }
 
 else{
    fs.appendFile('arquivo.txt', name+"\r\n", function(err,data){
        res.writeHead(302,{
            location: '/',
        })
        res.end()
    })


 }





});

server.listen(porta,()=>{
    console.log(`porta ${porta}`)
})