const db = require('../../data/db-config');
const findAll = async () => {
  return await db('weather');
};
const findById = async (id) => {
  return db('weather').where({ id }).first();
};
module.exports = {
  findAll,
  findById,
};
