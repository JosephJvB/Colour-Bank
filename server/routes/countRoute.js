const express = require('express')
const bodyParser = require('body-parser')
// const fs = require('mz/fs')

const db = require('./db')

const router = express.Router()

router.use(bodyParser.json())

// router.post('/baka', (req, res) => {
//   global.console.log('then do the writefile')
//   global.console.log(req.body)
// })

router.get('/all', (req, res) => {
  db.getAllData()
    .then(a => res.send(a))
})

// im concerned about how these two get routes would interact...
// if I have my beasty select, I may not need that second GET route there..cos all that does is get me count, which I would get in my beasty select..

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getCount(id)
    .then(c => res.send(c))
})

router.put('/:id/:count', (req, res) => {
  const { id, count } = req.params
  db.addCount(id, count)
    .then(() => res.status(200).end())
})

module.exports = router
