"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.table("users", table => {
      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
  }

  down() {
    this.table("users", table => {
      table.dropColumn("companies_id");
    });
  }
}

module.exports = UserSchema;
