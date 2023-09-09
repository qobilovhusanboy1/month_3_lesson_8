const {fetch, fetchOne} = require("../utils/pg");

const createQuery ="insert into category(category_name) values ($1) returning*";

const findQuery = "select * from category";

const findOneQuery = "select * from category where id = ($1)"

const updateQuery = "update category set category_name = ($1) where id = ($2) returning*"

const removeQuery = "delete from category where id = $1 returning*"

module.exports = {
  create: async (category_name) =>
    await fetchOne(createQuery,category_name),
  
  find: async () =>
    await fetch(findQuery),

  find_one: async (id) => 
    await fetchOne(findOneQuery, id),
    
  update: async (category_name, id) =>
    await fetchOne(updateQuery, category_name, id),

  remove: async (id) =>
    await fetchOne(removeQuery, id)
};