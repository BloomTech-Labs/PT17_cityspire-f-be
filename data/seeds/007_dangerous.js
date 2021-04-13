exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('dangerousCities')
    .del()
    .then(function () {
      return knex('dangerousCities').insert([
        {
          id: '1',
          city: 'Detroit',
          state: 'Michigan',
          crimeRate: '19.5',
          chance: '1 in 51',
          murders: '275',
        },
        {
          id: '2',
          city: 'St.-Louis',
          state: 'Missouri',
          crimeRate: '19.2',
          chance: '1 in 51',
          murders: '262',
        },
        {
          id: '3',
          city: 'Memphis',
          state: 'Tennessee',
          crimeRate: '19.0',
          chance: '1 in 52',
          murders: '330',
        },
        {
          id: '4',
          city: 'Baltimore',
          state: 'Maryland',
          crimeRate: '19.0',
          chance: '1 in 53',
          murders: '335',
        },
        {
          id: '5',
          city: 'Danville',
          state: 'Illinois',
          crimeRate: '17.9',
          chance: '1 in 55',
          murders: '7',
        },
        {
          id: '6',
          city: 'Scranton',
          state: 'Pennsylvania',
          crimeRate: '15.7',
          chance: '1 in 63',
          murders: '5',
        },
        {
          id: '7',
          city: 'San-Bernardino',
          state: 'California',
          crimeRate: '15.2',
          chance: '1 in 65',
          murders: '52',
        },
      ]);
    });
};
