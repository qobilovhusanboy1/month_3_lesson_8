const Joi = require("joi");

class workerValidation {
  static async create({fullname, email, worker_password}) {
    const {error} = Joi.object({
      fullname: Joi.string().max(32).required(),
      email: Joi.string().max(32).required(),
      worker_password: Joi.string().min(5).max(32).required(),
    }).validate({fullname, email, worker_password});

    if (error) {
      return {error};
    } else {
      return {error: false};
    }
  }
}

module.exports = workerValidation;