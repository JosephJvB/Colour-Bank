const config = require(`${__dirname}/../../knexfile`).development
const knex = require('knex')(config)

function getCount (id) {
  return knex('Bank')
    .where('id', id)
    .select('count')
    .first()
}

function addCount (id, newCount) {
  return knex('Bank')
    .where('id', id)
    .update({ count: newCount })
}

function getAllData () {
  return knex('Bank')
    .select()
}

module.exports = { getCount, addCount, getAllData }
