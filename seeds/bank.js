
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Bank').del()
    .then(() => {
      // Inserts seed entries
      return knex('Bank').insert([
        { id: 1, rgba: 'rgba(236, 39, 39, 0.6)', colour: 'red', count: 0 },
        { id: 2, rgba: 'rgba(7, 0, 234, 0.6)', colour: 'blue', count: 0 },
        { id: 3, rgba: 'rgba(251, 255, 35, 0.6)', colour: 'yellow', count: 0 },
        { id: 4, rgba: 'rgba(40, 166, 1, 0.6)', colour: 'green', count: 0 },
        { id: 5, rgba: 'rgba(127, 63, 191, 0.6)', colour: 'purple', count: 18 }
      ])
    })
}
