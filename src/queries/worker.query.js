const {fetch, fetchOne} = require("../utils/pg");

const cheskQuery = "select * from workers where fullname = ($1) and worker_password = ($2)"

const createQuery ="insert into workers(fullname, email, worker_password) values ($1, $2, $3) returning*";

const findQuery = "select * from workers";

const findOneQuery = "select * from workers where id = ($1)"

const updateQuery = "update workers set fullname = ($1), email = ($2), worker_password = ($3) where id = ($4) returning*"

const removeQuery = "delete from workers where id = $1 returning*"

module.exports = {
  chesk_worker:  async (fullname, password) => 
    await fetchOne(cheskQuery, fullname, password),

  create: async (fullname, email, worker_password) =>
    await fetchOne(createQuery,fullname, email, worker_password),
  
  find: async () =>
    await fetch(findQuery),

  find_one: async (id) => 
    await fetchOne(findOneQuery, id),
    
  update: async (fullname, email, worker_password, id) =>
    await fetchOne(updateQuery, fullname, email, worker_password, id),

  remove: async (id) =>
    await fetchOne(removeQuery, id)
};