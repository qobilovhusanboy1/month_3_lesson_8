const {fetch, fetchOne} = require("../utils/pg");

const createQuery ="insert into product(product_name, kg, price, category_id) values ($1, $2, $3, $4) returning*";

const findQuery = "select * from product";

const findOneQuery = "select * from product where id = ($1)"

const removeQuery = "delete from product where id = $1 returning*"

const cheskQuery = "select * from product where product_name = ($1) and category_id = ($2)"

const plusQuery = "update product set kg = kg+($1), price = price+($4) where product_name = ($2) and category_id = ($3) returning*"

const minusQuery = "update product set kg = kg-($1), price = price-($4) where product_name = ($2) and category_id = ($3) returning*"

module.exports = {
  create: async (product_name, kg, price, category_id) =>
    await fetchOne(createQuery, product_name, kg, price, category_id),
  
  find: async () =>
    await fetch(findQuery),

  find_one: async (id) => 
    await fetchOne(findOneQuery, id),

  remove: async (id) =>
    await fetchOne(removeQuery, id),
  
  chesk_product: async (product_name, category_id) =>
    await fetchOne(cheskQuery, product_name, category_id),

  product_plus: async (product_name, category_id, kg, price) =>
    await fetchOne(plusQuery, kg, product_name, category_id, price),

  product_minus: async (product_name, category_id, kg, price) => 
    await fetchOne(minusQuery, kg, product_name, category_id, price)
};