const User = require("../models/User");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
async function login({ username, password }, callback) {
    const user = await User.findOne({ username });

    if (user != null) {
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SEC,
            { expiresIn: "5h" })
        if (bcrypt.compareSync(password, user.password)) {
            // call toJSON method ffapplied during model instantiation
            const { password, ...others } = user._doc
            return callback(null, { ...others, accessToken });
        } else {
            return callback({
                message: "Invalid Username/Password!",
            });
        }
    } else {
        return callback({
            message: "Invalid Username/Password!",
        });
    }
}

async function register(params, callback) {
    if (params.username === undefined) {
        console.log(params.username);
        return callback(
            {
                message: "Username Required",
            },
            ""
        );
    }

    const user = new User(params);
    user
        .save()
        .then((response) => {
            return callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        });
}


module.exports = {
    login,
    register
}