const jwt = require("jsonwebtoken")

const verifyJWT = (req, res, next) => {

    // const authHeader = req.headers.Authorization || req.headers.authorization

    // if (!authHeader?.startWith("Bearer "))
    //     return res.status(401).json("Unauthorized")

    // const token = authHeader.split(" ")[1]

    // jwt.verify(
    //     token,
    //     process.env.PASSWORD,
    //     (err, decode) => {
    //         if (err) return res.status(401).json("Unauthorized")
    //         req.user = decode
    //         next()
    //     } 
    // )
    next()
}


module.exports = verifyJWT