module.exports = function (db) {
  return {
    // Get all Restaurants
    getRestaurants: function (req, res) {
      db.Restaurant.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbRestaurants) {
        res.json(dbRestaurants);
      });
    },
    // Create a new Restaurant
    createRestaurant: function (req, res) {
      db.Restaurant.create(req.body).then(function (dbRestaurant) {
        res.json(dbRestaurant);
      });
    },
    // Delete a Restaurant by id
    deleteRestaurant: function (req, res) {
      db.Restaurant.destroy({ where: { id: req.params.id } }).then(function (dbRestaurant) {
        res.json(dbRestaurant);
      });
    },
    // Get all Items for a given restaurant
    getItems: function (req, res) {
      db.Item.findAll({ where: { RestaurantId: req.session.passport.restaurant.id } }).then(function (dbItems) {
        res.json(dbItems);
      });
    },
    // Creates a new Item
    createItem: function (req, res) {
      db.Item.create(req.body).then(function (dbItem) {
        res.json(dbItem);
      });
    }
  };
};
