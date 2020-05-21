var path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render(path.join(__dirname, "../views/partials/index.handlebars"));
    });

    app.get("/stores", function (req, res) {
        res.render(path.join(__dirname, "../views/partials/stores.handlebars"));
    });
};

