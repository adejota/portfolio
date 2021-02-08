const express = require('express')
var path = require('path')
const nunjucks = require('nunjucks')
const projects = require("./data")

const server = express()

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

// Desenvolvimento
server.use(express.static('public'))

// Produção
/* server.use(express.static(path.join(__dirname, '/public'))); */

server.get('/', function(req, res) {
    return res.render("about")
})

server.get('/projects', function(req, res) {
    return res.render("projects", { items: projects } )
})

const port = process.env.port || 8081
server.listen(port, function() {
    console.log('server is running')
})