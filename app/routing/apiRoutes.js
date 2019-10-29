
module.exports = function (app, connection) {
    app.get("/api/friends", (req, res) => {
        // res.json(friendArr);
    });

    app.post("/api/friends", (req, res) => {
        const person = req.body;

        connection.query("INSERT INTO users(name, photo_url) VALUES (?,?)", [person.name, person.photo_url], (err, data, fields) => {
            if (err) {
                console.log(`Error inserting new user into db - user: ${person.name}`);
                console.log(err);
                return res.status(500).end();
            }

            let userId = data.insertId;
            console.log(`New user successfully inserted into db.  New user id: ${userId}`);

            // Build array of answers to insert into DB, attach the new user id as part of the array (foreign key)
            let answerKeys = Object.keys(req.body).filter(answer => { return answer.startsWith("question") });
            let answerArr = [];
            answerKeys.forEach(answerKey => {
                answerArr.push([ userId, Number(answerKey.split("-")[1]), Number(person[answerKey])]);
            });

            console.log(answerArr);

            connection.query("INSERT INTO answers (user_id, answer_num, score) VALUES ?",[answerArr],(err,data,fields)=>{
                if(err){
                    console.log(`Error inserting answers into db - user_id: ${userId}`);
                    console.log(err);
                    return res.status(500).end();
                }

                console.log(`Answers successfully inserted into db for user id: ${userId}`);

                res.json({ user_id: userId });
            }); //insert answers for user
        }); //insert user
    });  //app.post
}; //module.exports