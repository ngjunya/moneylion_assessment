# moneylion_assessment

This assessment is done by using Nodejs/Expressjs framework. 

To start the server : npm start 

Port : 8000

Database : MySQL

ORM : Sequelize 

Assessment APIs located in App.js file.

Steps to test:

1 : run command "npm install"

2 : Edit the database configuration in config.json(development) to your MySQL database environment

3 : Create a database named "moneylion"

4 : run command "sequelize db:migrate" in terminal

5 : create user with api below 

POST : http://localhost:8000/

Body : 

{

    "featureName":"Delete",
    
    "email":"world@gmail.com",
    
    "enable":false
    
}

6. test assessment GET api

GET http://localhost:8000/feature?email=world@gmail.com&featureName=Delete

7. test assessment POST api

POST http://localhost:8000/feature

Body:

{

    "featureName":"Delete",
    
    "email":"hello@gmail.com",
    
    "enable":false
    
}
