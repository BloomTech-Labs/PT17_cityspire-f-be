const db = require('../../data/db-config');

const findAll = async () => {
  return await db('rentalPrices');
};

const findById = async (id) => {
  return db('rentalPrices').where({ id }).first();
};

module.exports = {
  findAll,
  findById,
};
