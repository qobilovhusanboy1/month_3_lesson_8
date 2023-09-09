const Joi = require("joi");

class workerValidation {
  static async create({product_name, kg, price, category_id}) {
    const {error} = Joi.object({
      product_name: Joi.string().max(32).required(),
      kg: Joi.number().required(),
      price: Joi.number().required(),
      category_id: Joi.number().required(),
    }).validate({product_name, kg, price, category_id});

    if (error) {
      return {error};
    } else {
      return {error: false};
    }
  }
}

module.exports = workerValidation;