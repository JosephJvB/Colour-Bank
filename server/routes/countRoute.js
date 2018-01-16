const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')

const router = express.Router()

router.use(bodyParser.json())

router.get('/:col', (req, res) => {
  db.getCount(req.params.col)
    .then(c => res.send(c))
})

router.put(':col/:count', (req, res) => {
  db.addCount(req.params.col, req.params.count)
    .then()
})

module.exports = router
