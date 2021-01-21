# moneylion_assessment

This assessment is done by using Nodejs/Expressjs framework. 

To start the server : npm start 

Port : 8000

Assessment APIs located in App.js file.

There are two features : Edit and Delete.

There are two user's email : test@gmail.com and hello@gmail.com.

User1 : test@gmail.com 
- only applicable for Edit feature
- Product manager can switch accesses of this user on Edit feature only.
- This user is not listed as a member of Delete feature. 

User 2 : hello@gmail.com
- applicable for Edit and Delete features
- Product manager can switch accesses of this user on Edit and Delete features. 

Sample Postman request for GET API:

GET http://localhost:8000/feature?email=hello@gmail.com&featureName=Edit

Sample Postman request for POST API:

POST http://localhost:8000/feature

Body:

{

    "featureName":"Delete",
    
    "email":"hello@gmail.com",
    
    "enable":false
    
}



