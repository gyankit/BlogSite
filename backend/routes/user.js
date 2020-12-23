const express = require('express');
const UserController = require('../controllers/user.controller');
const middleware = require('../middleware/user.auth');
const router = express.Router();

let userController = new UserController();

router.post('/login', userController.login);
router.post('/create', userController.create)
router.patch('/update', middleware, userController.update);
router.delete('/delete/:id', middleware, userController.delete);
router.get('/findById/:id', middleware, userController.findById);
router.get('/activate/:id', middleware, userController.activate);
router.get('/deactivate/:id', middleware, userController.deactivate);


module.exports = router;