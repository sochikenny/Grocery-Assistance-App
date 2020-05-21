var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/grocery", function(req, res) {
    db.grocery.findAll({}).then(function(dbgrocery) {
      res.json(dbgrocery);
    });
  });


  app.post("/api/grocery", function(req, res) {
    db.grocery.create({
      item: req.body.item,
      purchased: req.body.purchased
    })
      .then(function(dbgrocery) {
        res.json(dbgrocery);
      })
      .catch(function(err) {
        res.json(err);
      });
  });


  app.delete("/api/grocery/:id", function(req, res) {
    db.grocery.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbgrocery) {
      res.json(dbgrocery);
    });
  });


  app.put("/api/grocery", function(req, res) {
    db.grocery.update(
      {
        item: req.body.item,
        purchased: req.body.purchased
      },
      {
        where: {
          id: req.body.id
        }
      }
    )
      .then(function(dbgrocery) {
        res.json(dbgrocery);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
