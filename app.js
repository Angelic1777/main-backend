const express = require('express')
const app = express()
const port = 5501

app.get('/api/user', (req, res) => {
  res.send('We are home page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
