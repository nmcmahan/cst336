/* EJS= embedded JavaScript 
1. NodeJS looks for ejs files in "views"
2. ejs files end with ejs
3. Have to let the nodejs engine know that we are using ejs
4. Only have to restart server when modding index.js, as that is the server code
<% code %> to execute a part off javascript code, <%= val %> to evaluate a value
name="" of an input will be the key of that inputs body, when passed to index
*/

var express = require("express");
var bodyParser = require("body-parser");
var app = express();


app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friendList = ["Alice", "Clark", "Bellamy", "God himself"];

app.get("/friends", function(req, res){
    res.render("friends", {friends: friendList});
});



app.get("/", function(req, res){
  // res.send("Hello world"); 
  res.render("home");
});

app.post("/addfriend", function(req, res){
    var newfriend=req.body.newfriend;
    friendList.push(newfriend);
    res.redirect("/friends");
});

app.post("/removefriend", function(req, res){
   var notfriend=req.body.deadfriend;
   var index = friendList.indexOf(notfriend);
   friendList.splice(index, index);
   res.redirect("/friends");
});

app.get("*", function(req, res){
 //   res.send("page not found");
 res.render("error");
})

app.listen(process.env.PORT, function(){
    console.log("Server is up and running");
});