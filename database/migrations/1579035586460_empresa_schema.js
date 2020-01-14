"use strict";

const Schema = use("Schema");

class EmpresaSchema extends Schema {
  up() {
    this.create("empresas", table => {
      table.increments();
      table.string("nomefantasia").notNullable();
      table.string("razaosocial").notNullable();
      table.string("cnpj").notNullable();
      table.boolean("ativo").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("empresas");
  }
}

module.exports = EmpresaSchema;
