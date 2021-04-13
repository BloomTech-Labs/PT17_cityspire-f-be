exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('rentalPrices')
    .del()
    .then(function () {
      return knex('rentalPrices').insert([
        {
          id: '1',
          city: 'New-York',
          state: 'New York',
          avgRentalPrice: '4333',
          populationDensity: '27012',
          colIndex: '245.7',
        },
        {
          id: '2',
          city: 'Los-Angeles',
          state: 'California',
          avgRentalPrice: '3200',
          populationDensity: '8092',
          colIndex: '146.6',
        },
        {
          id: '3',
          city: 'Chicago',
          state: 'Illinois',
          avgRentalPrice: '2395',
          populationDensity: '11842',
          colIndex: '98.7',
        },
        {
          id: '4',
          city: 'Houston',
          state: 'Texas',
          avgRentalPrice: '1631',
          populationDensity: '3502',
          colIndex: '95.6',
        },
        {
          id: '5',
          city: 'Phoenix',
          state: 'Arizona',
          avgRentalPrice: '1376',
          populationDensity: '2798',
          colIndex: '100.9',
        },
        {
          id: '6',
          city: 'Philadelphia',
          state: 'Pennsylvania',
          avgRentalPrice: '2146',
          populationDensity: '11380',
          colIndex: '110.4',
        },
        {
          id: '7',
          city: 'San-Antonio',
          state: 'Texas',
          avgRentalPrice: '1132',
          populationDensity: '2880',
          colIndex: '85.7',
        },
      ]);
    });
};
