const jwt = require("../utils/jwt");

const isSuperAdmin_or_Worker = async (req, res, next) => {
    const token = req.headers.authorization;
    
    if(!token)
        return res.status(401).json({message: "Unauthorized"});

    jwt.verify(token, (error, data) => {
        if(error)
            res.status(401).json({message: "Unauthorized"});
        
        req.id = data;
        next()
     });
};

module.exports = isSuperAdmin_or_Worker;