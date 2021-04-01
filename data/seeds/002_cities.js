exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cities')
    .del()
    .then(function () {
      return knex('cities').insert([
        {
          city: 'wichita',
          state: 'Kansas',
          rental_price: '850',
          crime: 'medium',
          air_quality_index: 'low',
          diversity_index: '58',
          walkability: '2.0',
          livability: '85',
          profile_id: '00ulthapbErVUwVJy4x6',
        },

        {
          city: 'Atlanta',
          state: 'Georgia',
          rental_price: '850',
          crime: 'medium',
          air_quality_index: 'low',
          diversity_index: '58',
          walkability: '2.0',
          livability: '85',
          profile_id: '00ulthapbErVUwVJy4x6',
        },
        {
          city: 'Rancho Cucamonga',
          state: 'California',
          rental_price: '2000',
          crime: 'low',
          air_quality_index: 'low',
          diversity_index: '82',
          walkability: '5.0',
          livability: '85',
          profile_id: '00ulthapbErVUwVJy4x6',
        },
        {
          city: 'La Jolla',
          state: 'California',
          rental_price: '2400',
          crime: 'low',
          air_quality_index: 'low',
          diversity_index: '70',
          walkability: '5.0',
          livability: '75',
          profile_id: '00ulthapbErVUwVJy4x6',
        },

      ]);
    });
};
