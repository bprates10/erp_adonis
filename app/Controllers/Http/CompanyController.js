"use strict";

const Company = use("App/Models/Company");

class CompanyController {
  async create({ request }) {
    const data = request.only([
      "business_name",
      "social_name",
      "register",
      "active"
    ]);
    const company = await Company.create(data);
    return company;
  }
}

module.exports = CompanyController;
