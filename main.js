const mongo = require("./Mongo")
const express = require("express")
const bp = require("body-parser")

var app = express()
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use(express.static('public'));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));

})
app.get("/contatos",(req,res) => {
    mongo.findContacts().then(x => res.send(x));

})
app.get("/delete",(req,res) => {
    mongo.deleteContact(req.query.usr).then(x => res.send(x));

})
app.get("/add",(req,res) => {
    mongo.insert({name:req.query.usr,numero:req.query.num}).then(x => res.send(x));

})
app.listen(3000, function () {
    console.log('servidor aberto na porta 3000');
});
