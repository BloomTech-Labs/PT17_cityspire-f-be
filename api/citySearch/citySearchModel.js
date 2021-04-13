const db = require('../../data/db-config');
const findByCity = (city) => {
  return db('citySearch').where({ city }).first();
};
const findById = async (id) => {
  return db('citySearch').where({ id }).first();
};
module.exports = {
  findByCity,
  findById,
};
