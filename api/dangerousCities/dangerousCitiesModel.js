const db = require('../../data/db-config');

const findAll = async () => {
  return await db('dangerousCities');
};

const findById = async (id) => {
  return db('dangerousCities').where({ id }).first();
};

module.exports = {
  findAll,
  findById,
};
