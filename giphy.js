$(document).ready(function() {

var animate="";
var still = "";

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

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=B8spp3ekfXWAhm3YD1L5zsQXYplNCh1x&limit=10&rating=g";


    $.ajax({
      url: queryURL,
      method: "GET"
    })
    
    .then(function(response) {

        var results = response.data;


        for (var i = 0; i < results.length; i++) {
            
            var gifDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);

            var spaceGif = $("<img>");

            spaceGif.attr("src", results[i].images.fixed_height_still.url);
         
           animate = spaceGif.attr("src", results[i].images.fixed_height.url);
            still = spaceGif.attr("src", results[i].images.fixed_height_still.url);

            // spaceGifStill.attr("src", results[i].images.fixed_height_still.url);

            // var stillState =  spaceGif.attr("src", results[i].images.fixed_height_still.url);


            gifDiv.append(still);
            gifDiv.append(p);


                $(gifDiv).on("click", function() {
                //    var animate =  $(this).attr("src", results[i].images.fixed_height.url);
                // //    var still = $(this).attr("src", results[i].images.fixed_height_still.url);

                    $(gifDiv).append(animate);
                })
           
            

            $("#gifbox").prepend(gifDiv);

        

    
            }

  

    });

});

});

