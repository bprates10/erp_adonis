"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TicketSchema extends Schema {
  up() {
    this.create("tickets", table => {
      table.increments();
      table.string("title").notNullable();
      table.string("message").notNullable();
      table
        .integer("status_id")
        .unsigned()
        .references("id")
        .inTable("ticket_status")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("priority_id")
        .unsigned()
        .references("id")
        .inTable("ticket_priorities")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
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
      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("partner_id")
        .unsigned()
        .references("id")
        .inTable("companies")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("tickets");
  }
}

module.exports = TicketSchema;
