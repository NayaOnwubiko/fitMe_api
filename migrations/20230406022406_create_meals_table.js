/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("meals", (table) => {
    table.uuid("id").primary();
    table.string("name").notNullable();
    table.string("type").notNullable();
    table.string("vegetarian").notNullable();
    table.string("calories").notNullable();
    table.string("ingredients", 1000).notNullable();
    table.string("preparation", 1000).notNullable();
    table.string("image").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("meals");
};
