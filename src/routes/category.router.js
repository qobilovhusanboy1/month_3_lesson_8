const { Router } = require("express");
const {create_category, get_category, getOne_category, update_category, delete_category} = require("../controllers/category.controller");


const router = Router();

router.post("/create/category", create_category);
router.get("/categoryes", get_category);
router.get("/category/:id", getOne_category);
router.put("/update/category/:id", update_category);
router.delete("/delete/category/:id", delete_category);

module.exports = router;