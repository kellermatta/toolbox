const express = require('express')
const indexRouter = require('./routes')
const app = express()
const config = require('./config')
const cors = require('cors')
const { port } = config
app.use(cors())
app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app
