const db = require("./models");

db.Grocery.bulkCreate([
    {
        item: "rice",
        purchased: true,
    },
    {
        item: "beans",
        purchased: false,
    }
]).then(function(results){
    console.log(results);
    
}).catch(function(err){
    console.log(err);
    
})
