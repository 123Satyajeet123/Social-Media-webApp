import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
    try{
        let token = req.headers['Authorization'];

        if (!token) return res.status(403).json({"message":"Denied access"});

        token = token.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    }
    catch(err){
        return res.status(500).json({"error":err.message});
    }};