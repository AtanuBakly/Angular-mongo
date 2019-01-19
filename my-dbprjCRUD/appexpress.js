let express=require("express");
let mongoClient=require("mongodb").MongoClient;
let bodyParser=require("body-parser");
let app=express();
let port=999;
let url="mongodb://localhost:27017";

// extracting json from client
app.use(bodyParser.json())

//middleweare to apply CORS
//https://enable-cors.org/server_expressjs.html
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// Adding CORS filter
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
     res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


  //fetch the data from the database
app.get("/retrieveAll",function(request,response){
    let employee=[];
    mongoClient.connect(url,{},function(err,client){
        let db=client.db("Company");
        //db.collection("Employee").find();
        let cursor=db.collection("Employee").find();
        cursor.forEach(function(doc,err){
            employee.push(doc);
        },function(){
            client.close();
            response.json(employee);
        })
    });
});

  // fetch the data by Id from the database
  app.get("/getEmployeeById/:_id",function(request,response){
    var idvalue=request.params._id;
   // let employee=[];
   let employee={};
    mongoClient.connect(url,{},function(err,client){
        let db=client.db("Company");
        //db.collection("Employee").find();
        let cursor=db.collection("Employee").find({"_id":idvalue});
        cursor.forEach(function(doc,err){
            //employee.push(doc);
            employee=doc;
        },function(){
            client.close();
            response.json(employee);
        })
    });
});

// var customParser = bodyParser.json({type: function(req) {
// 	return req.body['content-type'] === '*/*; charset=UTF-8';
// }});
// save the data in the database

 app.post("/addEmployee",function(request,response){
    // let content = request.body;
    // let insertDoc = function(db, callback) {
    //     db.collection("Employee").insertOne(content, function(err, result){
    //         console.log("Inserted Successfully!")
    //         callback();
    //         response.json(result);
    //     })
    // }
    // mongoClient.connect(url, {useNewUrlParser:true}, function(err, client) {
    //     let db = client.db("Company");
    //     insertDoc(db, function(){
    //         client.close();
    //     })
    // });

     mongoClient.connect(url,function(err,client){
        let db=client.db("Company");
       // let cursor=db.collection("Employee").insertOne({"_id":"102","name":"ppp","salary":8520});
        let cursor=db.collection("Employee").insertOne({"_id":request.body._id,"Name":request.body.Name,"Salary":request.body.Salary});
        client.close();
        response.json("addEmployee method");
     });
});

  // update the data in the database
app.put("/UpdateEmployee",function(request,response){
    mongoClient.connect(url,function(err,client){
        let db=client.db("Company");
        let cursor=db.collection("Employee").updateOne({ "_id" : request.body._id,},{$set:{"Name":request.body.Name,"Salary":request.body.Salary}});
        client.close();
        response.json('Update sucess');
    });
});

// update the data in the database
app.delete("/DeleteEmployee/:_id",function(request,response){
    var idvalue=request.params._id;
    mongoClient.connect(url,function(err,client){
        let db=client.db("Company");
        let cursor=db.collection("Employee").remove({ "_id" : idvalue});
        client.close();
        response.json('delete sucess');
    });
});

app.listen(port,function(){
console.log(`App is ready to serve in ${port}`);
});
