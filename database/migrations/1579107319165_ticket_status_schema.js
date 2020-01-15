"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TicketStatusSchema extends Schema {
  up() {
    this.create("ticket_status", table => {
      table.increments();
      table.string("description").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("ticket_status");
  }
}

module.exports = TicketStatusSchema;
