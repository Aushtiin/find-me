const express = require('express');
const router = express.Router();
const asyncHandler = require('../middleware/async');
const { userSignUp, getUsers, userLogin } = require('../controllers/userController');

router.post('/signup', asyncHandler(userSignUp));

router.get('/', asyncHandler(getUsers));

router.post('/login', asyncHandler(userLogin));

module.exports = router;