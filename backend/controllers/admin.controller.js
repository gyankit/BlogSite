const AdminModel = require('../models/admin.model');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const dateFormat = require('dateformat');
const jwt = require('jsonwebtoken');

let adminModel = new AdminModel;

class AdminController {
    create = (req, res) => {
        let body = req.body;
        if (Object.keys(body).length === 0) {
            return res.status(400).send({
                success: 0,
                error: "Content can not be empty!",
            });
        }
        const salt = genSaltSync(10);
        body.lastUpdate = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        body.password = hashSync(req.body.password, salt);
        adminModel.create(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.affectedRows) {
                result.message = "New admin Successfully Added";
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'Unable to add New admin'
                });
            }
        });
    }


    findById = (req, res) => {
        let body = req.params;
        adminModel.findById(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.length) {
                return res.status(200).json({
                    success: 1,
                    data: result[0]
                });
            } else {
                return res.status(404).json({
                    success: 0,
                    error: 'No Data Found'
                });
            }
        });
    }


    findAll = (req, res) => {
        adminModel.findAll((err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.length) {
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'No Data Found'
                });
            }
        });
    }


    update = (req, res) => {
        let body = req.body;
        body.lastUpdate = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        if (body.password != undefined) {
            const salt = genSaltSync(10);
            body.password = hashSync(req.body.password, salt);
        }
        if (Object.keys(body).length === 0) {
            return res.status(400).send({
                success: 0,
                error: "Content can not be empty!"
            });
        }
        adminModel.update(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result) {
                result.message = "admin Data Updated Successfully";
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'Error Occur in updating Record'
                });
            }
        });
    }


    delete = (req, res) => {
        let body = req.params;
        adminModel.delete(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.affectedRows) {
                result.message = `admin Data Successfully Deleted`;
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'Error In Deleting this admin'
                });
            }
        });
    }


    deleteAll = (req, res) => {
        adminModel.deleteAll((err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.affectedRows) {
                return res.status(200).json({
                    success: 1,
                    error: 'All Data Successfully Deleted'
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'No data to Delete'
                });
            }
        });
    }


    login = (req, res) => {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).send({
                success: 0,
                error: "Content can not be empty!"
            });
        }
        let body = req.body;
        body.lastLogin = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        adminModel.login(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: 'Wrong adminname or Password'
                });
            }
            if (result) {
                let status = result.status;
                if (compareSync(body.password, result.password)) {
                    result.password = undefined;
                    result.status = undefined;
                    let token = jwt.sign({
                        data: result
                    }, process.env.SECRET, { expiresIn: '8h' });
                    if (status) {
                        return res.status(200).json({
                            success: 1,
                            message: 'Login Successful',
                            token: token
                        });
                    } else {
                        return res.status(200).json({
                            success: 2,
                            message: 'Login Successful',
                            token: token
                        });
                    }
                } else {
                    return res.status(200).json({
                        success: 0,
                        error: 'Wrong username or Password'
                    });
                }
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'Wrong username or Password'
                });
            }
        });
    }


    deactivate = (req, res) => {
        let body = req.params;
        adminModel.deactivate(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.affectedRows) {
                result.message = `admin Account is Successfully Deactivated`;
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'Unable to Change Status'
                });
            }
        });
    }


    activate = (req, res) => {
        let body = req.params;
        admin.activate(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.affectedRows) {
                result.message = `admin Account is Successfully Restored`;
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'Unable to Change Status'
                });
            }
        });
    }
}

module.exports = AdminController