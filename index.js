var AWS = require('aws-sdk')

AWS.config.loadFromPath('./crd.json');

var ec2 = new AWS.EC2();
var params = {
    InstanceIds: [
       
    ]
   };
   ec2.describeInstances(function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(JSON.stringify(data));           // successful response
     
   });
   
