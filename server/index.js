const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001
const publicPath = path.join(__dirname, '..', 'build')
require('dotenv').config()

const send = require('./routes/send')

app.use(bodyParser.json());
app.use(express.static(publicPath))

app.use('/api/send', send)

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => console.log(`Server is running on port ${port}` ))