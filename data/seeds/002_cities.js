exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cities')
    .del()
    .then(function () {
      return knex('cities').insert([
        {
          city: 'New-York',
          state: 'New York',
          population: '8336817',
          latitude: '40.7128',
          longitude: '74.0060',
          schoolScore: '26',
          numberOfSunnyDays: '224',
          unemploymentRate: '12.6',
          avgRentalPrice: '4333',
          safetyRanking: '129',
          dangerousRanking: '7.7',
          rec1: 'Los-Angeles',
          rec2: 'Chicago',
          rec3: 'Houston',
          rec4: 'Phoenix',
          rec5: 'Philadelphia',
          rec6: 'San-Antonio',
          profile_id: '00ulthapbErVUwVJy4x6',
        },
      ]);
    });
};
