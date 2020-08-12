const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const User = require('../models/user.model');
const { response } = require('express');
const { authSchema } = require('../helpers/validation-schema');

router.post('/register', async (req, res, next) => {
   
    try {
        //const { email, password } = req.body;
        //if(!email || !password) throw createError.BadRequest();
        const result = await authSchema.validateAsync(req.body);
        
        const userExist = await User.findOne({ email: result.email});
        if(userExist) throw createError.Conflict(`${result.email} is already been register`);

        const user = new User(result);
        const savedUser = await user.save();

        res.send(savedUser);
    } catch (error) {
        if(error.isJoi === true) error.status = 422
        next(error);
    }
});

router.post('/login', async (req, res, next) => {
    console.log('login route');
});

router.post('/refresh-token', async (req, res, next) => {
    console.log('refresh token route');
});

router.delete('/logout', async (req, res, next) => {
    console.log('logout route');
});

module.exports = router;