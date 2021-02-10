const express = require('express')
const serverless = require('serverless-http')
const nunjucks = require('nunjucks')
const projects = require("../data")

const server = express()

const router = express.Router()

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

router.get('/', function(req, res) {
    return res.render("about")
})

router.get('/projects', function(req, res) {
    return res.render("projects", { items: projects } )
})

server.use('/.netlify/functions/server', router)

module.exports.handler = serverless(server)