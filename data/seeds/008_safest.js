exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('safestCities')
    .del()
    .then(function () {
      return knex('safestCities').insert([
        {
          id: '1',
          city: 'South-Burlington',
          state: 'Virginia',
          homeSafety: '6',
          naturalDisasterRisk: '36',
          financialSafety: '21',
        },
        {
          id: '2',
          city: 'Plano',
          state: 'Texas',
          homeSafety: '3',
          naturalDisasterRisk: '113',
          financialSafety: '30',
        },
        {
          id: '3',
          city: 'Nashua',
          state: 'New Hampshire',
          homeSafety: '10',
          naturalDisasterRisk: '27',
          financialSafety: '67',
        },
        {
          id: '4',
          city: 'Lewiston',
          state: 'Maine',
          homeSafety: '19',
          naturalDisasterRisk: '12',
          financialSafety: '32',
        },
        {
          id: '5',
          city: 'Salem',
          state: 'Oregon',
          homeSafety: '11',
          naturalDisasterRisk: '70',
          financialSafety: '57',
        },
        {
          id: '6',
          city: 'Raleigh',
          state: 'North Carolina',
          homeSafety: '21',
          naturalDisasterRisk: '55',
          financialSafety: '13',
        },
        {
          id: '7',
          city: 'Gilbert',
          state: 'Arizona',
          homeSafety: '29',
          naturalDisasterRisk: '14',
          financialSafety: '16',
        },
      ]);
    });
};
