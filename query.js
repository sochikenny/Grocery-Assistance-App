const db = require("./models");

db.Grocery.findAll({}).then(function(results){
    console.log(results);
    
}).catch(function(error){
    console.error(error);  
});