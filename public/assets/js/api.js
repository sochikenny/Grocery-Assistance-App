//Place API call.. Takes in zip code and spits out postal code place ID
var placeURL =
  "https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=market&types=establishment&location=37.76999,-122.44696&radius=500&key=AIzaSyCBMsGzEjyXZdesMU6K8WJrJco58Q0R674";

  "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters"

$.ajax({
  url: placeURL,
  method: "GET"
}).then(function(response) {
  //for (var i = 0; i < 5; i++){
  //console.log(response.restaurants[i].restaurant.user_rating.aggregate_rating);
  //console.log(response.restaurants[i].restaurant.timings);
  //console.log(response.restaurants[i].restaurant.location.locality);
  console.log(response);
  //console.log(response.results[i].title)
  //}
});

var superMarketURL =
  "https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=market&types=establishment&location=37.76999,-122.44696&radius=500&key=AIzaSyCBMsGzEjyXZdesMU6K8WJrJco58Q0R674";

$.ajax({
  url: superMarketURL,
  method: "GET"
}).then(function(response) {
  //for (var i = 0; i < 5; i++){
  //console.log(response.restaurants[i].restaurant.user_rating.aggregate_rating);
  //console.log(response.restaurants[i].restaurant.timings);
  //console.log(response.restaurants[i].restaurant.location.locality);
  console.log(response);
  //console.log(response.results[i].title)
  //}
});
