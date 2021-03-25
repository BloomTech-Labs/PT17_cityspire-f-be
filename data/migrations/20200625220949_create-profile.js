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
      table.float('diversity_index');
      table.float('population');
      table.float('rental_price');
      table.string('crime');
      table.string('air_quality_index');
      table.float('walkability');
      table.float('livability');
      table.float('latitude');
      table.float('longitude');
      table
        .string('profile_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('cities').dropTableIfExists('profiles');
};
