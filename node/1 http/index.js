// const http = require('http')
// console.log(http)

// const PORT = 3000

// const server = http.createServer((req, res)=>{

//     res.write("olá, Mundo!")
//     res.end()
// })


// server.listen(PORT,()=>{
// console.log(`servidor rodando na porta ${PORT}`)

// })

// const http = require('http')
// console.log(http)

// const porta = 3000

// const server = http.createServer((req,res)=>{

//     if(req.url === '/home'){
//         res.writeHead(200, {'Content-Type':'text/plan'} )
//         res.write('page Home')
//         res.end()


//     }else if(req.url === '/sobre'){
//         res.writeHead(200, {'Content-Type':'text/plan'} )
//         res.write('page Sobre')
//         res.end()
//     }else {
//         res.writeHead(400, {'Content-Type':'text/plan'} )
//         res.write('NOT FUND')
//         res.end()
//     }


// })
//  server.listen(porta,()=>{
//     console.log(`porta ${porta}`)
//  })



const http = require('http')

const porta = 3000

const server = http.createServer((req,res)=>{
    if(req.url === "/home"){
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
        res.write('<h1>página home<h1>')
        res.write('<p>página home tem um cálculo báaaáááááá<p>')
        res.end()
    }else if(req.url === "/sobre")
    {
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
        res.write('<h1>página SOBRE<h1>')
        res.end()
    }
    else if(req.url === "/contato")
    {
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
        res.write('<h1>página contato<h1>')
        res.end()
    }
    else{
        res.writeHead(400, {'Content-Type':'text/html;charset=utf-8'})
        res.write('<h1>NOT FUND<h1>')
        res.end()
    }


})


server.listen(porta,()=>{
    console.log(`port = ${porta}`)

})