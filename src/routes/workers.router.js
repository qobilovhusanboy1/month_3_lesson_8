const { Router } = require("express");
const isSuperAdmin = require("../middlewares/isSuperAdmin_or_Worker");
const {chesk_worker, create_worker, get_one_worker, get_workers, update_one_worker, delete_one_worker} = require("../controllers/workers.controller");


const router = Router();

router.get("/worker/login", chesk_worker);
router.post("/create/worker", isSuperAdmin, create_worker);
router.get("/get/workers", isSuperAdmin, get_workers);
router.get("/get/worker/:id", isSuperAdmin, get_one_worker);
router.put("/update/worker/:id", isSuperAdmin, update_one_worker);
router.delete("/delete/worker/:id", isSuperAdmin, delete_one_worker);

module.exports = router;