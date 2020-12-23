const express = require('express');
const router = express.Router();

const db = require('../config/db');

router.get('/tables', (req, res) => {
    const userTable = "CREATE TABLE IF NOT EXISTS `users` ( `id` INT(10) NOT NULL , `role` VARCHAR(20) NOT NULL DEFAULT 'User' , `firstName` VARCHAR(50) NOT NULL , `lastName` VARCHAR(50) NOT NULL , `contact` VARCHAR(15) NOT NULL , `email` VARCHAR(100) NOT NULL , `username` VARCHAR(15) NOT NULL , `password` TEXT NOT NULL , `status` BOOLEAN NOT NULL DEFAULT TRUE , `lastUpdate` DATETIME NOT NULL , `lastLogin` DATETIME NULL , PRIMARY KEY (`id`), UNIQUE (`contact`), UNIQUE (`email`), UNIQUE (`username`))";

    const postTable = "CREATE TABLE IF NOT EXISTS `posts` ( `id` INT(10) NOT NULL AUTO_INCREMENT , `title` VARCHAR(255) NOT NULL , `slag` VARCHAR(255) NOT NULL , `content` TEXT NOT NULL , `icon` TEXT NOT NULL , `photo` TEXT NOT NULL , `social_id` INT(10) NOT NULL, `status` BOOLEAN NOT NULL DEFAULT TRUE , `featured` BOOLEAN NOT NULL DEFAULT TRUE , `author` INT(10) NOT NULL , `uploadDate` DATETIME NOT NULL , `lastUpdate` DATETIME NULL , PRIMARY KEY (`id`), UNIQUE (`slag`), UNIQUE (`icon`), UNIQUE (`photo`), FOREIGN KEY (`social_id`) REFERENCES social(`id`))";

    const tagTable = "CREATE TABLE IF NOT EXISTS `tags` ( `id` INT(10) NOT NULL AUTO_INCREMENT , `tag` VARCHAR(255) NOT NULL , `slag` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`), UNIQUE (`tag`), UNIQUE (`slag`))";

    const categoryTable = "CREATE TABLE IF NOT EXISTS `categories` ( `id` INT(10) NOT NULL AUTO_INCREMENT , `category` VARCHAR(255) NOT NULL , `slag` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`), UNIQUE (`category`), UNIQUE (`slag`))";

    const tagPostTable = "CREATE TABLE IF NOT EXISTS `tag_post` ( `id` INT(10) NOT NULL AUTO_INCREMENT , `tag_id` INT(10) NOT NULL , `post_id` INT(10) NOT NULL , PRIMARY KEY (`id`), FOREIGN KEY (`tag_id`) REFERENCES tags(`id`), FOREIGN KEY (`post_id`) REFERENCES posts(`id`))";

    const categoryPostTable = "CREATE TABLE IF NOT EXISTS `category_post` ( `id` INT(10) NOT NULL AUTO_INCREMENT , `category_id` INT(10) NOT NULL , `post_id` INT(10) NOT NULL , PRIMARY KEY (`id`), FOREIGN KEY (`category_id`) REFERENCES categories(`id`), FOREIGN KEY (`post_id`) REFERENCES posts(`id`))";

    const socialTable = "CREATE TABLE IF NOT EXISTS `social` ( `id` INT(10) NOT NULL AUTO_INCREMENT , `youtube` TEXT NULL , `facebook` TEXT NULL , `instagram` TEXT NULL , `linkedIn` TEXT NULL , `github` TEXT NULL , PRIMARY KEY (`id`))";

    let sql = `${userTable};${socialTable};${postTable};${tagTable};${categoryTable};${tagPostTable};${categoryPostTable};`;
    console.log(sql);

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                error: err
            });
        }
        return res.status(200).json({
            success: 1,
            data: result
        });
    });
});


module.exports = router;