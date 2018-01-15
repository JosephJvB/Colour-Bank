
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('Colours', (t) => {
    t.increments('id').primary()
    t.integer('red')
    t.integer('blue')
    t.integer('yellow')
    t.integer('green')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('Colours')
}
