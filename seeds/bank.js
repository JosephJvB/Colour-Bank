
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Bank').del()
    .then(() => {
      // Inserts seed entries
      return knex('Bank').insert([
        { id: 1, colour: 'rgba(236, 39, 39, 0.6)', count: 0 },
        { id: 2, colour: 'rgba(7, 0, 234, 0.6)', count: 0 },
        { id: 3, colour: 'rgba(251, 255, 35, 0.6)', count: 0 },
        { id: 4, colour: 'rgba(40, 166, 1, 0.6)', count: 0 },
        { id: 5, colour: 'rgba(127, 63, 191, 0.6)', count: 18 }
      ])
    })
}
