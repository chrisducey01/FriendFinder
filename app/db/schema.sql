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
