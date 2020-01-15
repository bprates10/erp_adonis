"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TicketHistoricSchema extends Schema {
  up() {
    this.create("ticket_historics", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("support_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("description").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("ticket_historics");
  }
}

module.exports = TicketHistoricSchema;
