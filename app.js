const express=require("express");
//Enable cors allows other origin to access the resources
const cors=require('cors');
const app=express();
//rectify incoming request as a JSON object 
app.use(express.json());
app.use(cors());
//listen to port 8000
app.listen(8000);
//store the user's model in a constant variable for query usage in the api
const user=require('./models/User')

//create user function 
async function createUser(feature,email,enable){
    const user1=await user.create({featureName:feature,email:email,enable:enable})
    return user1;
}

//This api is not required in the assessment
//This api is used to create data in the MySQL database
app.post("/",async (req,res)=>{
    //evoke createUser function with the request body as function parameter
    let output=await createUser(req.body.feature,req.body.email,req.body.enable);
    //createUser function return user1 
    //In other words, output=user1
    return res.status(200).json(output); 
})


//get api
app.get('/feature',async(req,res)=>{
    //store request queries into constant variable
    const email=req.query.email;
    const feature=req.query.featureName;
    //Using javascript findOne() array function to find the specific user data
    //By constant variable defined above as parameter
    const user2=await user.findOne({where:{featureName:feature,email:email}})
    if(!user2){
        res.status(404).send("User not found");
    }
    //Check if enable is true or false
    if(user2.enable){
        //return json below if true
        return res.json({"canAccess":"true"})
    } else{
        //return json below if false
        return res.json({"canAccess":"false"})
    }
})

//post api
app.post("/feature",async(req,res)=>{
    //store request body parameter into constant variable
    const feature=req.body.featureName;
    const email=req.body.email;
    const enable=req.body.enable;
    //Using sequelize update query to update enable boolean value of the specific user 
    const user2=await user.update({enable:enable},{where:{featureName:feature,email:email}})
    //check if update successful or not 
    if(user2==1){
        //return status 200 if success
        return res.status(200).end();
    }else{
        //return status 304 if fail
        return res.status(304).end();
    }
})
