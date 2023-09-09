const {fetch, fetchOne} = require("../utils/pg");

const findOneQuery = "select * from super_admin where admin_name = ($1) and admin_password = ($2)"

module.exports = {
  chesk_admin: async (name, password) => 
    await fetchOne(findOneQuery, name, password)
};