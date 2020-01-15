"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TicketPrioritySchema extends Schema {
  up() {
    this.create("ticket_priorities", table => {
      table.increments();
      table.string("description").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("ticket_priorities");
  }
}

module.exports = TicketPrioritySchema;
