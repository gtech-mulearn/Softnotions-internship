const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

console.log('here');

router.post('/users/create',userController.postUserData);
router.get('/users',userController.getUserData);

module.exports = router;
