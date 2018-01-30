const express = require('express')
const bodyParser = require('body-parser')
// const fs = require('mz/fs')

const db = require('./db')

const router = express.Router()

router.use(bodyParser.json())

// router.get('/baka', (req, res) => {
//   global.console.log('hi')
//   res.send(fs).end()
// })

router.get('/:col', (req, res) => {
  const { col } = req.params
  db.getCount(col)
    .then(c => res.send(c))
})

router.put('/:col/:count', (req, res) => {
  const { col, count } = req.params
  db.addCount(col, count)
    .then(() => res.status(200).end())
})

module.exports = router
