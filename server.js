const app = require('express')(),
    bodyParser = require('body-parser'),
    cors = require('cors-express');



var options = {
  allow: {
    origin: '*',
    methods: 'GET,PATCH,PUT,POST,DELETE,HEAD,OPTIONS',
    headers: 'Content-Type, Authorization, Content-Length, X-Requested-With, X-HTTP-Method-Override,loginType'
  },
  expose: {
    headers: null
  },
  max: {
    age: null
  },
  options: function(req, res, next) {
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  },
  specials: {
    powered: null
  }
};



//Server Config
app.use(cors(options));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

/*first API to check if server is running*/
app.get('/', function(req, res) {
  res.send('hello, thing!');
});

var balance = {
  "saving": 500,
  "checking": 300
}

app.post('/df', function(req, res) {
  console.log("Before turn balance: " + JSON.stringify(balance))
  var resp = req.body.queryResult.fulfillmentText + " ";
  if(req.body.queryResult.action == "transfer.money.yes"){
    if(req.body.queryResult.outputContexts[0].parameters["account-from"][0] == "savings account" && req.body.queryResult.outputContexts[0].parameters["account-to"] == "checking account"){
      balance.saving = balance.saving - req.body.queryResult.outputContexts[0].parameters.amount.amount;
      balance.checking = balance.checking + req.body.queryResult.outputContexts[0].parameters.amount.amount;
      resp += Date.now();
    } else if(req.body.queryResult.outputContexts[0].parameters["account-from"][0] == "checking account" && req.body.queryResult.outputContexts[0].parameters["account-to"] == "savings account"){
      balance.saving = balance.saving + req.body.queryResult.outputContexts[0].parameters.amount.amount;
      balance.checking = balance.checking - req.body.queryResult.outputContexts[0].parameters.amount.amount;
      resp += Date.now();
    }
  } else if(req.body.queryResult.action == "account.balance.check") {
    if(req.body.queryResult.outputContexts[0].parameters["account"] == "savings account" ){
      resp += "USD " + balance.saving;
    } else if(req.body.queryResult.outputContexts[0].parameters["account"] == "checking account"){
      resp += "USD " + balance.checking;
    }
  }
  console.log("After turn balance: " + JSON.stringify(balance))
  res.send({'fulfillmentText': resp});
});


app.listen(8080);