const db = require('../config/db');

class PostModel {

    create = (data, callback) => {
        db.query(`INSERT INTO social VALUES (NULL, '${data.youtube}', '${data.facebook}', '${data.instagram}', '${data.linkedIn}', '${data.github}')`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                data.social_id = results.insertId;
                db.query(`INSERT INTO posts VALUES (NULL, '${data.title}', '${data.slag}', '${data.content}', '${data.icon}', '${data.photo}', '${data.social_id}', 1, 1, '${data.author}', '${data.uploadDate}', NULL)`,
                    (err, results, fields) => {
                        if (err) {
                            db.query(`DELETE * FROM social WHERE id='${data.social_id}'`);
                            return callback(err, null);
                        }
                        return callback(null, results);
                    });
            });
    }


    update = (data, callback) => {
        db.query(`UPDATE posts SET ? WHERE id='${data.id}'`, data,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    delete = (data, callback) => {
        db.query(`DELETE FROM posts WHERE id = '${data.id}'`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }

                return callback(null, results);
            });
    }


    deleteAll = (callback) => {
        db.query(`TRUNCATE posts`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    createTag = (data, callback) => {
        db.query(`INSERT INTO tags VALUES (NULL, '${data.tag}', '${data.slag}')`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    updateTag = (data, callback) => {
        db.query(`UPDATE tags SET ? WHERE id='${data.id}'`, data,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    deleteTag = (data, callback) => {
        db.query(`DELETE FROM tags WHERE id = '${data.id}'; DELETE * FROM tag_post WHERE tag_id = '${data.id}'`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }

                return callback(null, results);
            });
    }


    deleteAllTag = (callback) => {
        db.query(`TRUNCATE posts; TRUNCATE tag_post`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    createCategory = (data, callback) => {
        db.query(`INSERT INTO categories VALUES (NULL, '${data.category}', '${data.slag}')`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    updateCategory = (data, callback) => {
        db.query(`UPDATE categories SET ? WHERE id='${data.id}'`, data,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    deleteCategory = (data, callback) => {
        db.query(`DELETE FROM categories WHERE id = '${data.id}'; DELETE * FROM category_post WHERE category_id = '${data.id}`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }

                return callback(null, results);
            });
    }


    deleteAllCategory = (callback) => {
        db.query(`TRUNCATE posts; TRUNCATE category_post`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    deactivate = (data, callback) => {
        let sql = '';
        if (data.status == undefined) {
            sql = `UPDATE posts SET status=0 WHERE id='${data.id}'`;
        } else {
            sql = `UPDATE posts SET featured=0 WHERE id='${data.id}'`;
        }
        db.query(sql,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    activate = (data, callback) => {
        let sql = '';
        if (data.status == undefined) {
            sql = `UPDATE posts SET status=1 WHERE id='${data.id}'`;
        } else {
            sql = `UPDATE posts SET featured=2 WHERE id='${data.id}'`;
        }
        db.query(sql,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


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