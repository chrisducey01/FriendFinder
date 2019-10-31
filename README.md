# FriendFinder

FriendFinder is a web-based app where users can fill out a survey and be shown an existing user that most closely matches their responses.  FriendFinder is a full stack app that utilizes Node/Express/MySQL on the backend to interact with the front-end site.  The front-end utilizes jQuery and BootStrap.   

# Getting Started

## Prerequisites for development

1.  MySQL instance installed on your local machine or a MySQL instance deployed to a remote server (i.e. JawsDB on Heroku)
2.  Node and NPM installed on your local machine

## Installing

Follow the instructions in this section to get the app setup to run on your machine.

1.  Clone the git project to your machine (example below is using ssh)
    ``` bash
    git clone git@github.com:chrisducey01/FriendFinder.git
    ```

2.  Install the node module dependencies from the package.json file
    ``` bash
    npm install
    ```

3.  Create a .env file in the top level directory.  This will contain the variables to connect to your MySQL database.
    a.  If you are using a local instance of MySQL, you will need the following variables included in your .env file.  You will need to update, at minimum the LOCAL_DB_USER and LOCAL_DB_PASSWORD values to the db account you have setup in MySQL (replace everything to the right of the equals sign, including the carats <>):
    ```
    # MySQL DB Variables
    LOCAL_DB_USER=<user id>
    LOCAL_DB_PASSWORD=<password>
    LOCAL_DB_NAME=friends_db
    LOCAL_DB_PORT=3306
    ```
    b.  If you are hosting your app on Heroku, use the JawsDB add-on that will create a MySQL instance for your app.  You will need to include a `JAWSDB_URL` variable in your .env file to connect successfully.  You can get the value for this variable on Heroku.
        1.  Go to your app and click on the `Resources` tab.
        2.  In the `Add-ons` section, find the JawsDB entry and click on the link.  This will open a new browser tab and take you to the JawsDB website which will provide you with the connection string you can include in the .env file.
        3.  Add the connection string to the .env file.  It should look similar to this:
        ``` bash
        JAWSDB_URL='mysql://<username>:<password>@g3v9lgqa8h5nq05o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/<dbname>'
        ```

4.  Locate the schema.sql file in the db folder of the project.  Execute all comamands if using a local MySQL instance to create the database and table definitions.  Skip the top section with the `CREATE DATABASE` statement if hosting a JawsDB MySQL instance on Heroku since the database will have already been created for you.

5.  Locate the seed.sql file in the db folder of the project.  Execute the sql commands to populate the tables created in step 4 with sample data.

# Running the app

There is a start script in the package.json file that starts up the server and connects to the MySQL database.  If you're deploying the app to Heroku, part of the deployment will automatically call this script to start the server.  If you're running this on a local machine, navigate to the project folder and run the command:
``` bash
npm start
```

## Demo

There is a demo of this app available on Heroku.  You can interact with the app and see the full functionality.  When you submit the survey, it will post the data and insert it into the database.

[Visit Demo Site](https://whispering-reef-83081.herokuapp.com/)

## Authors
* **Christopher Ducey** - *Initial work* - [chrisducey01](https://github.com/chrisducey01)
