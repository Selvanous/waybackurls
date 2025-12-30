const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express();

app.set("port",(process.env.PORT || 8000));

app.use(bodyParser.urlencoded( {extended:false} ));

app.use(bodyParser.json());

app.get("/",function(req, res){
    res.send("hi ,i'm botchat")
});
    app.get("/webhook",function(req, res){
        const verify_token = "sa.leh23"

        let token = req.query['hub.verify_token'];
        let challenge = req.query['hub.challenge'];

        if(token === verify_token){
            res.status(200).send(challenge);
        }
        else{
            res.status(403);
        }
})

app.listen(app.get("port"), function(){
console.log("server is running and listening on port"+app.get("port"))
})