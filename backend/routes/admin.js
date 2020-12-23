const express = require('express');
const AdminController = require('../controllers/admin.controller');
const middleware = require('../middleware/admin.auth');
const router = express.Router();

let adminController = new AdminController();

router.post('/login', adminController.login);
router.post('/create', adminController.create)
router.get('/find', middleware, adminController.findAll);
router.get('/findById/:id', middleware, adminController.findById);
router.patch('/update', middleware, adminController.update);
router.delete('/delete', middleware, adminController.deleteAll);
router.delete('/delete/:id', middleware, adminController.delete);
router.get('/activate/:id', middleware, adminController.activate);
router.get('/deactivate/:id', middleware, adminController.deactivate);


module.exports = router;