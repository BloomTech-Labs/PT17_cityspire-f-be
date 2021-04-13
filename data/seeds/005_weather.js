exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('weather')
    .del()
    .then(function () {
      return knex('weather').insert([
        {
          id: '1',
          city: 'Santa-Barbara',
          state: 'California',
          numberOfSunnyDays: '283',
          avgLow: '45',
          avgHigh: '77',
        },
        {
          id: '2',
          city: 'Salinas',
          state: 'California',
          numberOfSunnyDays: '259',
          avgLow: '41',
          avgHigh: '75',
        },
        {
          id: '3',
          city: 'San-Diego',
          state: 'California',
          numberOfSunnyDays: '146',
          avgLow: '49',
          avgHigh: '77',
        },
        {
          id: '4',
          city: 'San-Francisco',
          state: 'California',
          numberOfSunnyDays: '259',
          avgLow: '47',
          avgHigh: '71',
        },
        {
          id: '5',
          city: 'San-Jose',
          state: 'California',
          numberOfSunnyDays: '257',
          avgLow: '42',
          avgHigh: '82',
        },
        {
          id: '6',
          city: 'Honolulu',
          state: 'Hawaii',
          numberOfSunnyDays: '271',
          avgLow: '65',
          avgHigh: '88',
        },
        {
          id: '7',
          city: 'Los-Angeles',
          state: 'California',
          numberOfSunnyDays: '284',
          avgLow: '49',
          avgHigh: '85',
        },
      ]);
    });
};
