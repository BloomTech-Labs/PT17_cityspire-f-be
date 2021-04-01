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
        {
          city: 'Tampa',
          state: 'Florida',
          rental_price: '1300',
          crime: 'low',
          air_quality_index: 'low',
          diversity_index: '64',
          walkability: '44',
          livability: '87',
          profile_id: '00ulthapbErVUwVJy4x6',
        },
        {
          city: 'Austin',
          state: 'Texas',
          rental_price: '1900',
          crime: 'medium',
          air_quality_index: 'low',
          diversity_index: '56',
          walkability: '66',
          livability: '87',
          profile_id: '00ulthapbErVUwVJy4x6',
        },
        {
          city: 'Des Moine',
          state: 'Iowa',
          rental_price: '900',
          crime: 'low',
          air_quality_index: 'low',
          diversity_index: '52',
          walkability: '10',
          livability: '90',
          profile_id: '00ulthapbErVUwVJy4x6',
        },
      ]);
    });
};
