const config = require(`${__dirname}/../../knexfile`).development
const knex = require('knex')(config)

const { log } = global.console

function addCount (id, newCount) {
  return knex('Bank')
    .where('id', id)
    .update({ count: newCount })
}

function getAllData () {
  return knex('Bank')
    .select()
}

function delBox (id) {
  return knex('Bank')
    .where('id', id)
    .del()
}

function addBox (colour) {
  log('db', colour)
  return knex('Bank')
    .insert({
      colour,
      count: 0
    })
}

module.exports = { addCount, getAllData, delBox, addBox }
