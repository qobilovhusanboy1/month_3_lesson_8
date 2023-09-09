const { Router } = require("express");
const isWorker = require("../middlewares/isSuperAdmin_or_Worker");
const {create_product, get_product, get_one_product, delete_product} = require("../controllers/product.controller");


const router = Router();

router.post("/create/product", isWorker, create_product);
router.get("/products", get_product);
router.get("/product/:id", get_one_product);
router.delete("/delete/product/:id", delete_product);

module.exports = router;