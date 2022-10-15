const express = require('express')
const app = express()

app.get('/', function (req, res) { res.send('We are HomePage')})

app.listen(3000)
