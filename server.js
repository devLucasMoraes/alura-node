import app from "./src/app.js"

const port = process.env.port || 3333

app.listen(port, () => {
    console.log(`Servidor escultando em http://localhost:${port}`)
})