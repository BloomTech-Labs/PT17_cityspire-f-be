// const { increment } = require("../db-config");

exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.timestamps(true, true);
    })
    .createTable('cities', function (table) {
      table.increments();
      table.string('city');
      table.string('state');
      table.string('population');
      table.string('latitude');
      table.string('longitude');
      table.string('schoolScore');
      table.string('numberOfSunnyDays');
      table.string('unemploymentRate');
      table.string('avgRentalPrice');
      table.string('safetyRanking');
      table.string('dangerousRanking');
      table.string('rec1');
      table.string('rec2');
      table.string('rec3');
      table.string('rec4');
      table.string('rec5');
      table.string('rec6');
      table
        .string('profile_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('citySearch', function (table) {
      table.increments();
      table.string('city');
      table.string('state');
      table.string('population');
      table.string('latitude');
      table.string('longitude');
      table.string('schoolScore');
      table.string('numberOfSunnyDays');
      table.string('unemploymentRate');
      table.string('avgRentalPrice');
      table.string('safetyRanking');
      table.string('dangerousRanking');
      table.string('rec1');
      table.string('rec2');
      table.string('rec3');
      table.string('rec4');
      table.string('rec5');
      table.string('rec6');
    })
    .createTable('schools', function (table) {
      table.increments();
      table.string('city');
      table.string('state');
      table.string('schoolName');
      table.float('schoolScore');
      table.float('numberOfStudents');
    })
    .createTable('weather', function (table) {
      table.increments();
      table.string('city');
      table.string('state');
      table.string('numberOfSunnyDays');
      table.float('avgLow');
      table.float('avgHigh');
    })
    .createTable('jobs', function (table) {
      table.increments();
      table.string('city');
      table.string('state');
      table.string('unemploymentRate');
      table.string('medianSalary');
      table.string('largestSector');
    })
    .createTable('rentalPrices', function (table) {
      table.increments();
      table.string('city');
      table.string('state');
      table.string('avgRentalPrice');
      table.string('populationDensity');
      table.string('colIndex');
    })
    .createTable('safestCities', function (table) {
      table.increments();
      table.string('city');
      table.string('state');
      table.string('homeSafety');
      table.string('naturalDisasterRisk');
      table.string('financialSafety');
    })
    .createTable('dangerousCities', function (table) {
      table.increments();
      table.string('city');
      table.string('state');
      table.string('crimeRate');
      table.string('chance');
      table.string('murders');
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('cities').dropTableIfExists('profiles');
};
