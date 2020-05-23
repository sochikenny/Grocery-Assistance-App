var path = require("path");
var db = require("../models");

module.exports = function (app) {

    app.get("/", async function (req, res) {
        let hbsObject = {};
        let results = await db.Grocery.findAll({}).catch(function(err)  {
            console.error(err); 
        })
        let newresults = JSON.stringify(results);
        hbsObject.grocery = JSON.parse(newresults);
        res.render("index", hbsObject);
    });
    // path.join(__dirname, "../views/partials/index.handlebars"
    app.get("/stores", function (req, res) {
        res.render("stores");
    });
};

// path.join(__dirname, "../views/partials/stores.handlebars")