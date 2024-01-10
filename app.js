// eslint-disable-next-line no-undef
const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/test', (request, response) => {
  res.send('<h1>Hello World!</h1>')
})

app.listen(PORT, () => {
  console.log('ENV', process.env.PORT)
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
