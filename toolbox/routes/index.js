const express = require('express')
const router = express.Router()
router.get('/iecho', function (req, res) {
  try {
    const texto = req.query.text.toLowerCase()
    const reverse = texto.split('').reverse().join('')
    res.send({ text: reverse, polindromo: texto === reverse })
  }
  catch {
    res.status(400).send({ error: 'no text' })
  }
})

module.exports = router
