"use strict";

class SessionController {
  async create({ request, auth }) {
    const { mail, password } = request.all();
    const token = await auth.attempt(mail, password);
    return token;
  }
}

module.exports = SessionController;
