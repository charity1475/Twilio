const express = require('express');
const app = express();
var request = require('request');
const bodyParser = require('body-parser');

const accountSid = "AC489a4de8bc0eed55b8c05524d511f363";
const authToken = "586bf47dcbdf63b2c443550e4b035422";

const client = require('twilio')(accountSid,authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.post("/req",(req,res)=>{
  const twiml = new MessagingResponse();
  var msg = twiml.message(req.body.Body);
  res.writeHead(200,{'Content-Type': 'text/xml'});
  res.end(twiml.toString());
  console.log(req.body);
});

app.get("/", (req,res)=>{
  res.send("Welcome to charity@steinny.inc");
});
app.listen(3000);
