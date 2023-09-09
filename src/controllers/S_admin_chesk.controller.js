const jwt = require("../utils/jwt");
const AdminQuery = require("../queries/S_admin_chesk.qurie");

const chesk_super_admin = async (req, res) => {
    const {name, password} = req.body;

    const admin = await AdminQuery.chesk_admin(name, password);

    if(!admin)
        return res.status(401).json({message: "Unauthorized"});

    const token = jwt.sign({id: admin.id});

    res.status(201).json({message: 'Success', token: token});
};

module.exports = {chesk_super_admin};