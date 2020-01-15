"use strict";

const Schema = use("Schema");

class CompanySchema extends Schema {
  up() {
    this.create("companies", table => {
      table.increments();
      table.string("business_name").notNullable();
      table.string("social_name").notNullable();
      table.string("register").notNullable();
      table.boolean("active").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("companies");
  }
}

module.exports = CompanySchema;
