const express = require('express');
const PostController = require('../controllers/post.controller');
const middleware = require('../middleware/admin.auth');
const router = express.Router();

let postController = new PostController();


router.post('/create', middleware, postController.create);
router.patch('/update', middleware, postController.update);
router.delete('/delete', middleware, postController.deleteAll);
router.delete('/delete/:id', middleware, postController.delete);
router.patch('/activate', middleware, postController.activate);
router.patch('/deactivate', middleware, postController.deactivate);

router.post('/createTag', middleware, postController.createTag);
router.patch('/updateTag', middleware, postController.updateTag);
router.delete('/deleteTag', middleware, postController.deleteAllTag);
router.delete('/deleteTag/:id', middleware, postController.deleteTag);

router.post('/createCategory', middleware, postController.createCategory);
router.patch('/updateCategory', middleware, postController.updateCategory);
router.delete('/deleteCategory', middleware, postController.deleteAllCategory);
router.delete('/deleteCategory/:id', middleware, postController.deleteCategory);

router.get('/findPostAll', middleware, postController.findPostAll);
router.get('/findPostLimit/:limit', middleware, postController.findPostLimit);
router.get('/findPostSlag/:slag', middleware, postController.findPostSlag);
router.get('/findPostFeatured', middleware, postController.findPostFeatured);
router.get('/findPostFeatured/:limit', middleware, postController.findPostFeaturedLimit);
router.get('/findPostTag/:tag', middleware, postController.findPostTag);
router.get('/findPostCategory/:category', middleware, postController.findPostCategory);
router.get('/findTag/:id', middleware, postController.findTag);
router.get('/findCategory/:id', middleware, postController.findCategory);


module.exports = router;