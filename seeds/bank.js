
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Bank').del()
    .then(() => {
      // Inserts seed entries
      return knex('Bank').insert([
        {id: 1, colour: 'red', count: 0},
        {id: 2, colour: 'blue', count: 0},
        {id: 3, colour: 'yellow', count: 0},
        {id: 4, colour: 'green', count: 0}
      ])
    })
}
