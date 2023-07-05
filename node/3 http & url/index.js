const http = require('https')

const porta = 3000



const server = http.createServer((req,res)=>{
    const urlInfo  = require('url').parse(req,res,true);

    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('content-type', 'text/html')

    if(!name){
        res.end('<h1> preencha seu nome:<h1/>  <form method="GET"> <input type="text" name="name" /> <input type="submit" value="enviar"/>  </form>')
    }else{
        res.end(`seja bem vindo ${name}`)
    }


})


server.listen(porta,()=>{
    console.log(`${porta}`)
})