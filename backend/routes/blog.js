const express = require('express');
const PostController = require('../controllers/blog.controller');
const router = express.Router();

let postController = new PostController();


router.get('/findPostAll', postController.findPostAll);
router.get('/findPostLimit/:limit', postController.findPostLimit);
router.get('/findPostSlag/:slag', postController.findPostSlag);
router.get('/findPostFeatured', postController.findPostFeatured);
router.get('/findPostFeatured/:limit', postController.findPostFeaturedLimit);
router.get('/findPostTag/:tag', postController.findPostTag);
router.get('/findPostCategory/:category', postController.findPostCategory);
router.get('/findTag/:id', postController.findTag);
router.get('/findCategory/:id', postController.findCategory);


module.exports = router;