// eslint-disable-next-line no-undef
const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('52')
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('problems')
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})