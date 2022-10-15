const express = require('express')
const app = express()
const port = 3000

app.get('/api/user', (req, res) => {
  res.send('We are home page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
