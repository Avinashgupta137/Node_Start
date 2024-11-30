const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello Avinash!')
})
app.get('/user', (req, res) => {
    res.send('Avinash137')
  })

console.log("Avinash");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})