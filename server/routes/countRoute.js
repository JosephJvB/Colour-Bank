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

router.put('/:id/:count', (req, res) => {
  const { id, count } = req.params
  db.addCount(id, count)
    .then(() => res.status(200).end())
})

router.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  db.delBox(id)
    .then(() => res.status(200).end())
})

module.exports = router
