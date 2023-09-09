const SuperAdminCheskRouter = require("./S_admin_chesk.router");
const WorkersRouter = require("./workers.router");
const CategoryRouter = require("./category.router");
const ProductRouter = require("./product.router");

module.exports = [
    SuperAdminCheskRouter,
    CategoryRouter,
    WorkersRouter,
    ProductRouter
];