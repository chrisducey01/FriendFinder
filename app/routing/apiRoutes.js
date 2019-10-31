
module.exports = function (app, connection) {
    app.get("/api/friends", (req, res) => {
        connection.query("SELECT * FROM users", (err, data) => {
            if (err) {
                console.log("Error getting friend list from db.");
                console.log(err);
                return res.status(500).end();
            }
            res.json(data);
        });
    });


    app.post("/api/friends", (req, res) => {
        const person = req.body;

        // Build array of all answers from the body object
        let newAnswerArr = [];
        for (let i = 1; i <= 10; i++) {
            let tempAnswer = Number(person[`question_${i}`]);
            newAnswerArr.push(tempAnswer ? tempAnswer : 0);
        }

        // Get all existing users to determine best match
        connection.query("SELECT * FROM users", (err, data) => {
            if (err) {
                console.log("Error getting friend list from db.");
                console.log(err);
                return res.status(500).end();
            }

            // Calculate the difference in answers for each existing user
            let minVal = 999;
            let minId = -1;
            let diffArr =
                data.map(dbPerson => {
                    let difference = 0;
                    for (let i = 0; i < 10; i++) {
                        difference += Math.abs(newAnswerArr[i] - Number(dbPerson[`question_${i + 1}`]));
                    }
                    // Keep track of the person that has the closest answers to you
                    if (difference < minVal) {
                        minVal = difference;
                        minId = dbPerson.user_id;
                    }
                    dbPerson["difference"] = difference;
                    return dbPerson;
                });

            // Insert as new user into db
            connection.query("INSERT INTO users SET ?", [person], (err, data, fields) => {
                if (err) {
                    console.log(`Error inserting new user into db - user: ${person.name}`);
                    console.log(err);
                    return res.status(500).end();
                }

                let userId = data.insertId;
                console.log(`New user successfully inserted into db.  New user id: ${userId}`);

                // All transactions are successful, return the best match as a JSON object
                res.json(diffArr.find(person => { return minId == person.user_id }));
            }); //insert new user
        }); //select all existing users
    });  //app.post
}; //module.exports