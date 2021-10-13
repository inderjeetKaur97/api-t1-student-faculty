const http =require('http')
const app = require('./app')
const server = http.createServer(app)
const port = process.env.PORT||1000

server.listen(port,'127.0.0.1',()=>{
console.log(`app is running at port ${port}`)
})