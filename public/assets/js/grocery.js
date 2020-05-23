$(document).ready(function() {

    $(".change-purchased").on("click", function (event) {
      console.log("change click");
      
      var id = $(this).data("id");
      var newpurchased = $(this).data("newpurchased");
  
      var newpurchasedState = {
        purchased: newpurchased
      };
  
      $.ajax("/api/grocery/" + id, {
        type: "PUT",
        data: newpurchasedState
      }).then(
        function () {
          console.log("changed purchased to", newpurchased);
          location.reload();
        }
      );
    });
  
    $("#post-grocery").on("submit", function (event) {
      console.log(event);
      
      event.preventDefault();
  
      var newGroceryitem = {
        item: $("#groceryitem").val().trim(),
      };
  
      $.ajax("/api/grocery", {
        type: "POST",
        data: newGroceryitem
      }).then(
        function () {
          console.log("created new grocery item");
          location.reload();
        }
      );
    });

    $("#delete-button").on("click", function (event) {
        var id = $(this).data("id");
    
        $.ajax("/api/grocery/" + id, {
          type: "DELETE"
        }).then(
          function () {
            console.log("deleted grocery id: ", id);
            location.reload();
          }
        );
    
      });
    
 });
