'use strict'

/* eslint no-console: "off" */
const logger = console.log.bind(console, 'Support-massive-sqs-listener')

const express = require('express')

const app = express()
const PORT = process.env.PORT || 4044

app.get('/test', (req, res) => {
  logger(`Serving from process ${process.pid}`)
  res.send({ process: process.pid})
})

app.listen(PORT, () => {
  logger(`Listen on port ${4044}`)
})
