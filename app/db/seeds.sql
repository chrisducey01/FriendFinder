-- Only execute the use statement if hosting a local instance of MySQL
-- This will use the database you created in the schema.sql file.
-- If hosting on JawsDB, the database name was included in the connection
--   string so you won't have to specify it.
USE friends_db;

-- Execute commands below to create a new table and populate seed data into it
TRUNCATE TABLE users;

INSERT INTO users(
    name, 
    photo_url, 
    question_1,
    question_2, 
    question_3, 
    question_4, 
    question_5, 
    question_6, 
    question_7, 
    question_8, 
    question_9, 
    question_10
)
VALUES
(
    'Pikachu',
    'https://secure.img1-ag.wfcdn.com/im/98270403/resize-h800-w800%5Ecompr-r85/8470/84707680/Pokemon+Pikachu+Wall+Decal.jpg',
    5,4,3,3,2,3,1,2,5,4
),
(
    'Homer Simpson',
    'https://cdn1.thr.com/sites/default/files/imagecache/768x433/2016/02/simp2006_homerarmscrossed_f_hires2_-_h_2016.jpg',
    4,4,3,3,2,3,2,2,1,1
),
(
    'Optimus Prime',
    'https://prodimage.images-bn.com/pimages/4897054512315_p0_v1_s550x406.jpg',
    2,1,3,3,5,3,2,2,3,2
),
(
    'Ted Danson',
    'https://cdn.aarp.net/content/dam/aarp/entertainment/celebrities/09/1140-ted-danson-green-wall.imgcache.rev44dcf3f445316831ba37686ff7fcd44f.jpg',
    2,2,4,3,5,5,1,2,3,1
),
(
    'Oprah Winfrey',
    'https://specials-images.forbesimg.com/imageserve/5d8cc84f12f5ec000822dcee/416x416.jpg?background=000000&cropX1=51&cropX2=4157&cropY1=634&cropY2=4740',
    1,2,3,1,1,2,3,1,2,3
),
(
    'Ron Swanson',
    'https://parade.com/wp-content/uploads/2013/10/tv-show-best-boss-ron-swanson.jpg',
    5,2,1,4,3,4,4,2,5,2
)