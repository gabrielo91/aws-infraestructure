'use strict'

/* eslint no-console: "off" */
const logger = console.log.bind(console, 'aws-node-server')
var os = require("os");
var hostname = os.hostname();
const express = require('express')

const app = express()
const PORT = process.env.PORT || 4044

app.get('/test', (req, res) => {
  logger(`Serving from process ${process.pid} and host ${hostname}`)
  res.send({ process: process.pid , hostname})
})

app.listen(PORT, () => {
  logger(`Listen on port ${PORT}`)
})
