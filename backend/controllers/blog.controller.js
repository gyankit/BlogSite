const PostModel = require('../models/blog.model');

let postModel = new PostModel;

class PostController {

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
        Post
        let body = req.params;
        postModel.findFeaturedLimit(body, (err, result) => {
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