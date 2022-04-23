const http = require('http')
const port = 3000

const rotas = {
    '/': 'Curso de node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pag editora'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})


server.listen(port, () => {
    console.log(`Servidor escultando em http://localhost:${port}`)
})