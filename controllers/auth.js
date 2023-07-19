import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const register = async (req, res) => {
    try{
        const {firstname,lastname,picturePath,friends,location,occupation, email, password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            picturePath,
            friends,
            location,
            occupation,
        });
        const savedUser = await newUser.save();
        return res.status(200).json(savedUser);
    }
    catch{err}{
        return res.status(500).json({"error":err.message});
    }
}

//login function

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user) return res.status(404).json({"message":"User not found"});

        const compare = await bcrypt.compare(password, user.password);
        if (!compare) return res.status(400).json({"message":"Wrong credentials"});
        const token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
        delete user.password;
        res.status(200).json({user, token});
    }
    catch(err){
        return res.status(500).json({"error":err.message});
    }};