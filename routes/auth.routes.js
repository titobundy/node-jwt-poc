const express = require('express');
const router = express.Router();

router.post('/register', async (req, res, next) => {
    console.log('register route');
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