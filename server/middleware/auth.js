const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) {
                return res.status(403).json("Invalid token!!!")
            } else {
                req.user = user;
                next()
            }
        })
    } else {
        return res.status(401).json("You are not authenticated!!!");
    }
}

const verifyAndAuthorize = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id == req.params.id || req.user.isAdmin) {
            next()
        } else {
            return res.status(403).json("You are not able to perform this action. Contact Admin for assistance");
        }
    })
}

const verifyAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            return res.status(403).json("You are not able to perform this action. Contact Admin for assistance");
        }
    })
}

module.exports = {
    verifyToken,
    verifyAndAuthorize,
    verifyAndAdmin
}