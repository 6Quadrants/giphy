$(document).ready(function() {


var topics = ["moon", "rocket", "star", "alien", "mars", "nebula", "astronaut"];

for (var i = 0;  i < topics.length; i++) {

    var topicsButton = $("<button>");
    topicsButton.addClass("buttonstyle");
    topicsButton.attr("data-topic", topics[i]);
    topicsButton.text(topics[i]);

    $("#gifbuttons").append(topicsButton);
}


    $(".buttonstyle").on("click", function() {
        var gifSearch = $(this).attr("data-topic");
        console.log(gifSearch);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=B8spp3ekfXWAhm3YD1L5zsQXYplNCh1x";


    $.ajax({
      url: queryURL,
      method: "GET"
    })
    
    .then(function(response) {

        var gifRate = response.data.rating;
        var gifImage = response.data.image_original_url;

        console.log(gifRate);
        console.log(gifImage);
    });

    //     data: [
    //         {
    //         rating: "",
            
    //         },
    //     ];
 

    });

});




