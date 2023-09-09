const Joi = require("joi");

class categoryValidation {
  static async create({category_name}) {
    const {error} = Joi.object({
      category_name: Joi.string().min(1).required(),
    }).validate({category_name});

    if (error) {
      return {error};
    } else {
      return {error: false};
    }
  }
}

module.exports = categoryValidation;