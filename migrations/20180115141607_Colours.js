
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('Bank', (t) => {
    t.increments('id').primary()
    t.string('rgba')
    t.integer('count')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('Bank')
}
