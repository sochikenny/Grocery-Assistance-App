var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/grocery", function(req, res) {
    db.Grocery.findAll({}).then(function(dbGrocery) {
      res.json(dbGrocery);
    });
  });

  app.post("/api/grocery", function(req, res) {
    db.Grocery.create({
      item: req.body.item,
      person: req.body.person,
      purchased: req.body.purchased
    })
      .then(function(dbGrocery) {
        res.json(dbGrocery);
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
    }).then(function(dbGrocery) {
      res.json(dbGrocery);
    });
  });

  app.put("/api/grocery", function(req, res) {
    db.Grocery.update(
      {
        item: req.body.item,
        person: req.body.person,
        purchased: req.body.purchased
      },
      {
        where: {
          id: req.body.id
        }
      }
    )
      .then(function(dbGrocery) {
        res.json(dbGrocery);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
