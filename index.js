const express = require('express')
const app = express()

app.get('/', function(req,res){
  res.send('Hello I am Browser. You are? Psst time in the query')
})

app.get('/hello/:name_person?', function(req,res) {
  var name_person = req.params.name_person;
  res.send('Hello ' + name_person)
})

app.listen(5000, function() {
  console.log('server running on port 5000')
})
