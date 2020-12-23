const db = require('../config/db');

class PostModel {

    findPostAll = (callback) => {
        db.query(`SELECT * FROM posts`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    findPostLimit = (data, callback) => {
        db.query(`SELECT * FROM posts LIMIT ${data.limit}`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    findPostSlag = (data, callback) => {
        db.query(`SELECT * FROM posts WHERE slag = '${data.slag}'`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    findPostFeatured = (data, callback) => {
        db.query(`SELECT * FROM posts WHERE featured = 1`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    findPostFeaturedLimit = (data, callback) => {
        db.query(`SELECT * FROM posts WHERE featured = 1 LIMIT ${data.limit}`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    findPostTag = (data, callback) => {
        db.query(`SELECT * FROM posts WHERE id IN (SELECT post_id FROM tag_post WHERE tag_id = (SELECT id FROM tags WHERE slag='${data.tag}'))`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    findPostCategory = (data, callback) => {
        db.query(`SELECT * FROM posts WHERE id IN (SELECT post_id FROM category_post WHERE category_id = (SELECT id FROM categories WHERE slag='${data.category}'))`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    findTag = (data, callback) => {
        db.query(`SELECT * FROM tags WHERE id = '${data.id}'`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    findCategory = (data, callback) => {
        db.query(`SELECT * FROM categories WHERE id = '${data.id}'`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }

}

module.exports = PostModel