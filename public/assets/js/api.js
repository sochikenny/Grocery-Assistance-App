//Place API call.. Takes in zip code and spits out postal code place ID
// var placeURL =
//   "https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=market&types=establishment&location=37.76999,-122.44696&radius=500&key=AIzaSyCBMsGzEjyXZdesMU6K8WJrJco58Q0R674";

//   "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters"

// $.ajax({
//   url: placeURL,
//   method: "GET"
// }).then(function(response) {
//   //for (var i = 0; i < 5; i++){
//   //console.log(response.restaurants[i].restaurant.user_rating.aggregate_rating);
//   //console.log(response.restaurants[i].restaurant.timings);
//   //console.log(response.restaurants[i].restaurant.location.locality);
//   console.log(response);
//   //console.log(response.results[i].title)
//   //}
// });
function searchLocation(zipCode) {
  var key = "&key=AIzaSyAtPSsLK6vd2cPiHSxryHM3OK98Kmenak4";
  var superMarketURL =
    "https://maps.googleapis.com/maps/api/place/textsearch/json?query=supermarkets+near+" +
    zipCode +
    key;

  $.ajax({
    url: superMarketURL,
    method: "GET"
  }).then(function(response) {
    for (var i = 0; i < 5; i++) {
      console.log(response.results[i].name);
      console.log(response.results[i].opening_hours);
      console.log(response.results[i].formatted_address);
      console.log(response);
    }
  });
}

$("#SearchBtn").on("click", function(event) {
  event.preventDefault();
  var cityinput = $("#Search-Term")
    .val()
    .trim();
  searchLocation(cityinput);
  $("#card-body1").empty();
});
