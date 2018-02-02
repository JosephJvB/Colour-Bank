const config = require(`${__dirname}/../../knexfile`).development
const knex = require('knex')(config)

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

function addBox ({ colourInput, rgbaInput }) {
  return knex('Bank')
    .insert({
      rgba: rgbaInput,
      count: 0
    })
}

module.exports = { addCount, getAllData, delBox, addBox }
