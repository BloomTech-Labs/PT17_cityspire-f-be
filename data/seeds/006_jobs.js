exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('jobs')
    .del()
    .then(function () {
      return knex('jobs').insert([
        {
          id: '1',
          city: 'South-Burlington',
          state: 'Vermont',
          unemploymentRate: '2.8%',
          medianSalary: '$50,324',
          largestSector: 'Education and Health Services',
        },
        {
          id: '2',
          city: 'Columbia',
          state: 'Maryland',
          unemploymentRate: '3.2%',
          medianSalary: '$62,510',
          largestSector: 'Business and Financial Operations',
        },
        {
          id: '3',
          city: 'Virginia-Beach',
          state: 'Virginia',
          unemploymentRate: '5.1%',
          medianSalary: '$75,623',
          largestSector: 'Government',
        },
        {
          id: '4',
          city: 'Salt-Lake-City',
          state: 'Utah',
          unemploymentRate: '3.8%',
          medianSalary: '$73,730',
          largestSector: 'Trade, transportation, and utilities',
        },
        {
          id: '5',
          city: 'Boise',
          state: 'Idaho',
          unemploymentRate: '2.4%',
          medianSalary: '$56,397',
          largestSector: 'Trade, transportation, and utilities',
        },
        {
          id: '6',
          city: 'Scottsdale',
          state: 'Arizona',
          unemploymentRate: '4.0%',
          medianSalary: '$84,601',
          largestSector: 'Trade, transportation, and utilities',
        },
        {
          id: '7',
          city: 'Chesapeake',
          state: 'Virginia',
          unemploymentRate: '3.0%',
          medianSalary: '$75,790',
          largestSector: 'Trade, transportation, and utilities',
        },
      ]);
    });
};
