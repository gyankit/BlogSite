const db = require('../config/db');

class UserModel {

    create = (data, callback) => {
        db.query(`INSERT INTO users VALUES (NULL, '${data.firstName}', '${data.lastName}', '${data.contact}', '${data.email}', '${data.username}', '${data.password}', 1, '${data.lastUpdate}', NULL)`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    findById = (data, callback) => {
        db.query(`SELECT * FROM users WHERE id = '${data.id}'`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    update = (data, callback) => {
        db.query(`UPDATE users SET ? WHERE id='${data.id}'`, data,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    delete = (data, callback) => {
        db.query(`DELETE FROM users WHERE id = '${data.id}'`,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }

                return callback(null, results);
            });
    }


    login = (data, callback) => {
        let sql = '';
        if (data.email == undefined) {
            sql = `SELECT id, firstName, lastName, contact, email, password, status FROM users WHERE contact='${data.contact}'`;
        } else {
            sql = `SELECT id, firstName, lastName, contact, email, password, status FROM users WHERE email='${data.email}'`;
        }
        db.query(sql,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                db.query(`UPDATE users SET lastLogin='${data.lastLogin}' WHERE ${results[0].id}`);
                return callback(null, results[0]);
            });
    }


    deactivate = (data, callback) => {
        let sql = `UPDATE users SET status=0 WHERE id='${data.id}'`;
        console.log(sql);
        db.query(sql,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }


    activate = (data, callback) => {
        let sql = `UPDATE users SET status=1 WHERE id='${data.id}'`;
        console.log(sql);
        db.query(sql,
            (err, results, fields) => {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, results);
            });
    }

}

module.exports = UserModel