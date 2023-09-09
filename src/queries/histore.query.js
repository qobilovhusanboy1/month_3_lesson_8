const {fetch, fetchOne} = require("../utils/pg");

const createQuery ="insert into history(worker_id, product_id, is_sell, kg, price) values ($1, $2, $3, $4, $5) returning*";

module.exports = {
  create: async (worker_id, product_id, is_sell, kg, price) =>
    await fetchOne(createQuery,worker_id, product_id, is_sell, kg, price),
};