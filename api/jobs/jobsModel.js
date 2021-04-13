const db = require('../../data/db-config');
const findAll = async () => {
  return await db('jobs');
};
const findById = async (id) => {
  return db('jobs').where({ id }).first();
};
module.exports = {
  findAll,
  findById,
};
