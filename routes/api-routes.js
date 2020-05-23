var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/grocery", function(req, res) {
    db.Grocery.findAll({}).then(function(dbgrocery) {
       res.json(dbgrocery);
    });
  });

  app.post("/api/grocery", function(req, res) {
    db.Grocery.create(
      {
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
    db.Grocery.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbgrocery) {
      res.json(dbgrocery);
    });
  });


  app.put("/api/grocery/:id", function(req, res) {
    db.Grocery.update(
      {
        // item: req.body.item,
        purchased: req.body.purchased
      },
      {
        where: {
          id: req.params.id
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
