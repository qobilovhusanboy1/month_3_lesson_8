const { Router } = require("express");
const {chesk_super_admin} = require("../controllers/S_admin_chesk.controller");


const router = Router();

router.get("/super/admin/login", chesk_super_admin);

module.exports = router;