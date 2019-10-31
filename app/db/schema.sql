-- Run this section to create the database on a localhost
-- If hosting mysql on Heroku you can skip this step since 
--   db is already created for you there
DROP DATABASE IF EXISTS friends_db;

CREATE DATABASE friends_db;

USE friends_db;

-- Run the SQL below regardless of where the db is hosted
-- to create the table needed for the app to run

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    user_id INT NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    photo_url varchar(256),
    question_1 INT NOT NULL,
    question_2 INT NOT NULL,
    question_3 INT NOT NULL,
    question_4 INT NOT NULL,
    question_5 INT NOT NULL,
    question_6 INT NOT NULL,
    question_7 INT NOT NULL,
    question_8 INT NOT NULL,
    question_9 INT NOT NULL,
    question_10 INT NOT NULL,
    PRIMARY KEY(user_id)
);
