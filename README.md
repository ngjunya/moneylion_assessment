# moneylion_assessment

This assessment is done by using Nodejs/Expressjs framework. 

To start the server : npm start 

Port : 8000

Database : MySQL

ORM : Sequelize 

Assessment APIs located in App.js file.

Steps to test:

1 : Edit the database configuration in config.json(development) to your MySQL database environment

2 : Create a database named "moneylion"

3 : run command "sequelize db:migrate" in terminal

4 : create user with api below

POST : http://localhost:8000/

Body : 

{

    "featureName":"Delete",
    
    "email":"world@gmail.com",
    
    "enable":false
    
}

5. test assessment GET api

GET http://localhost:8000/feature?email=world@gmail.com&featureName=Delete

6. test assessment POST api

POST http://localhost:8000/feature

Body:

{

    "featureName":"Delete",
    
    "email":"hello@gmail.com",
    
    "enable":false
    
}






