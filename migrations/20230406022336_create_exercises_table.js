/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("exercises", (table) => {
    table.uuid("id").primary();
    table.string("name").notNullable();
    table.string("type").notNullable();
    table.string("muscle").notNullable();
    table.string("equipment").notNullable();
    table.string("difficulty").notNullable();
    table.string("instructions", 500).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("exercises");
};
