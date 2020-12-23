const jwt = require('jsonwebtoken');

middleware = (req, res, next) => {
    let token = req.get('authorization');
    if (token) {
        token = token.slice(7);
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({
                    seccess: 0,
                    error: "Access denied: Token expired"
                });
            } else {
                next();
            }
        });
    } else {
        return res.status(403).json({
            seccess: 0,
            error: "Access denied: Unauthorized Access"
        });
    }
}

module.exports = middleware;