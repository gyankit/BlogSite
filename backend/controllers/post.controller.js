const PostModel = require('../models/post.model');
const dateFormat = require('dateformat');

let postModel = new PostModel;

class PostController {
    create = (req, res) => {
        let body = req.body;
        if (Object.keys(body).length === 0) {
            return res.status(400).send({
                success: 0,
                error: "Content can not be empty!",
            });
        }
        body.uploadDate = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        postModel.create(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.affectedRows) {
                result.message = "New post Successfully Added";
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'Unable to add New post'
                });
            }
        });
    }


    update = (req, res) => {
        let body = req.body;
        body.lastUpdate = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        if (Object.keys(body).length === 0) {
            return res.status(400).send({
                success: 0,
                error: "Content can not be empty!"
            });
        }
        postModel.update(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result) {
                result.message = "post Data Updated Successfully";
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
        postModel.delete(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.affectedRows) {
                result.message = `post Data Successfully Deleted`;
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'Error In Deleting this post'
                });
            }
        });
    }


    deleteAll = (req, res) => {
        postModel.deleteAll((err, result) => {
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


    deactivate = (req, res) => {
        let body = req.params;
        postModel.deactivate(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.affectedRows) {
                result.message = `post Account is Successfully Deactivated`;
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
        post.activate(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.affectedRows) {
                result.message = `post Account is Successfully Restored`;
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


    createTag = (req, res) => {
        let body = req.body;
        if (Object.keys(body).length === 0) {
            return res.status(400).send({
                success: 0,
                error: "Content can not be empty!",
            });
        }
        postModel.createTag(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.affectedRows) {
                result.message = "New Tag Successfully Added";
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'Unable to add New post'
                });
            }
        });
    }


    updateTag = (req, res) => {
        let body = req.body;
        if (Object.keys(body).length === 0) {
            return res.status(400).send({
                success: 0,
                error: "Content can not be empty!"
            });
        }
        postModel.updateTag(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result) {
                result.message = "Tag Data Updated Successfully";
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


    deleteTag = (req, res) => {
        let body = req.params;
        postModel.deleteTag(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.affectedRows) {
                result.message = `Tag Data Successfully Deleted`;
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'Error In Deleting this post'
                });
            }
        });
    }


    deleteAllTag = (req, res) => {
        postModel.deleteAllTag((err, result) => {
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
                    error: 'All Tag Successfully Deleted'
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'No data to Delete'
                });
            }
        });
    }


    createCategory = (req, res) => {
        let body = req.body;
        if (Object.keys(body).length === 0) {
            return res.status(400).send({
                success: 0,
                error: "Content can not be empty!",
            });
        }
        postModel.createCategory(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.affectedRows) {
                result.message = "New Category Successfully Added";
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'Unable to add New post'
                });
            }
        });
    }


    updateCategory = (req, res) => {
        let body = req.body;
        if (Object.keys(body).length === 0) {
            return res.status(400).send({
                success: 0,
                error: "Content can not be empty!"
            });
        }
        postModel.updateCategory(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result) {
                result.message = "post Category Updated Successfully";
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


    deleteCategory = (req, res) => {
        let body = req.params;
        postModel.deleteCategory(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err
                });
            }
            if (result.affectedRows) {
                result.message = `Category Data Successfully Deleted`;
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'Error In Deleting this post'
                });
            }
        });
    }


    deleteAllCategory = (req, res) => {
        postModel.deleteAllCategory((err, result) => {
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
                    error: 'All Category Successfully Deleted'
                });
            } else {
                return res.status(200).json({
                    success: 0,
                    error: 'No data to Delete'
                });
            }
        });
    }


    findPostAll = (req, res) => {
        postModel.findPostAll((err, result) => {
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


    findPostSlag = (req, res) => {
        let body = req.params;
        postModel.findPostSlag(body, (err, result) => {
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


    findPostLimit = (req, res) => {
        let body = req.params;
        postModel.findPostLimit(body, (err, result) => {
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


    findPostFeatured = (req, res) => {
        postModel.findPostFeatured((err, result) => {
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


    findPostFeaturedLimit = (req, res) => {
        let body = req.params;
        postModel.findPostFeaturedLimit(body, (err, result) => {
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


    findPostTag = (req, res) => {
        let body = req.params;
        postModel.findPostTag(body, (err, result) => {
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


    findPostCategory = (req, res) => {
        let body = req.params;
        postModel.findPostCategory(body, (err, result) => {
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


    findTag = (req, res) => {
        let body = req.params;
        postModel.findTag(body, (err, result) => {
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
                return res.status(200).json({
                    success: 0,
                    error: 'No Data Found'
                });
            }
        });
    }


    findCategory = (req, res) => {
        let body = req.params;
        postModel.findCategory(body, (err, result) => {
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
                return res.status(200).json({
                    success: 0,
                    error: 'No Data Found'
                });
            }
        });
    }

}

module.exports = PostController