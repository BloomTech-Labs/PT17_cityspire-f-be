const db = require('../../data/db-config');

const findAll = async () => {
  return await db('safestCities');
};

const findById = async (id) => {
  return db('safestCities').where({ id }).first();
};

module.exports = {
  findAll,
  findById,
};
