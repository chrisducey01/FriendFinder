DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    user_id INT NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    photo_url varchar(256),
    PRIMARY KEY(user_id)
);

CREATE TABLE answers(
    answer_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    answer_num INT NOT NULL,
    score INT NOT NULL,
    PRIMARY KEY(answer_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);