const db = require('../../data/db-config');
const findAll = async () => {
  return await db('schools');
};
const findById = async (id) => {
  return db('schools').where({ id }).first();
};
module.exports = {
  findAll,
  findById,
};
