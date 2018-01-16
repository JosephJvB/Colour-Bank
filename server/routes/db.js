const config = require(`${__dirname}/../../knexfile`).development
const knex = require('knex')(config)

function getCount (c) {
  return knex('Bank')
    .where('colour', c)
    .select('count')
}

function addCount (col, newCount) {
  return knex('Bank')
    .where('colour', col)
    .update({ count: newCount })
}

module.exports = { getCount, addCount }
